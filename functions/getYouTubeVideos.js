const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({
  origin: true,
});

function getDataFromGoogleAPI() {
  console.log(functions.config())
  const youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUXXumJ4mQ025Fm7by0WA0CA&maxResults=50&key=${functions.config().api.youtubekey}`;
  return axios.get(youtubeURL);
}

function getDataFromFirebase() {
  return axios.get(`https://tonyloveshan-com-58a99.firebaseio.com/youtube_video_list.json?access_token=${functions.config().api.firebaseaccesstoken}`);
}

function storeDataToFirebase(data) {
  data['timestamp'] = Date.now();
  axios.put('https://tonyloveshan-com-58a99.firebaseio.com/youtube_video_list.json', data);
}

async function getData() {
  let response = await getDataFromFirebase();
  if (!response.data || (Date.now() - response.data['timestamp'] > 2 * 60 * 60 * 1000)) {
    response = await getDataFromGoogleAPI();
    storeDataToFirebase(response.data);
  }
  return response;
}

module.exports = async function (req, res) {
  return cors(req,res, async () => {
    const response = await getData();
    return res.status(200).send(response.data)
  })
}