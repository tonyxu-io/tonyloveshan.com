const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({
  origin: true,
});

const {
  db,
} = require('./admin');

function getDataFromGoogleAPI() {
  console.log(functions.config())
  const youtubeURL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&fields=items(id,snippet.title,contentDetails.itemCount)&channelId=UCXXumJ4mQ025Fm7by0WA0CA&maxResults=50&key=${functions.config().api.youtubekey}`;
  return axios.get(youtubeURL);
}

async function getDataFromFirebase() {
  var ref = db.ref("/youtube_play_lists");
  const value = await ref.once("value", (snapshot) => {
    return snapshot.val()
  });
  return value
}

async function storeDataToFirebase(data) {
  data['timestamp'] = Date.now();
  await db.ref('/youtube_play_lists').set(data)
}

async function getData() {
  let response = await getDataFromFirebase();
  if (!response.data || (Date.now() - response.data['timestamp'] > 24 * 60 * 60 * 1000)) {
    response = await getDataFromGoogleAPI();
    storeDataToFirebase(response.data);
  }
  return response;
}

module.exports = async function (req, res) {
  return cors(req, res, async () => {
    const response = await getData();
    return res.status(200).send(response.data)
  })
}