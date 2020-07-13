const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({
  origin: true,
});

function getDataFromGoogleAPI(playlistId) {
  console.log(functions.config())
  const youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${functions.config().api.youtubekey}`;
  return axios.get(youtubeURL);
}

module.exports = async function (req, res) {
  return cors(req, res, async () => {
    const playlistId = req.query.playlistId || "UUXXumJ4mQ025Fm7by0WA0CA"
    const response = await getDataFromGoogleAPI(playlistId);
    return res.status(200).send(response.data)
  })
}