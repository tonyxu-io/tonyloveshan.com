const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({
  origin: true,
});

const {
  db,
} = require('./admin');


const igUrl = `https://graph.facebook.com/v5.0/17841422126220075?fields=media{caption,comments_count,like_count,media_url,media_type,permalink,thumbnail_url},profile_picture_url,username,biography,name&access_token=${functions.config().api.facebookaccesstoken}`


function getDataFromFBAPI() {
  return axios.get(igUrl);
}

async function getDataFromFirebase() {
  var ref = db.ref("/instagram_account");
  const value =  await ref.once("value", function(snapshot) {
    return snapshot.val()
  });
  return value
}

async function storeDataToFirebase(data) {
  data['timestamp'] = Date.now()
  await db.ref('/instagram_account').set(data)
}

async function getData() {
  let response = await getDataFromFirebase();
  if (!response.data || (Date.now() - response.data['timestamp'] > 24 * 60 * 60 * 1000)) {
    response = await getDataFromFBAPI()
    storeDataToFirebase(response.data)
  }
  return response
}

module.exports = async function (req, res) {
  return cors(req,res, async () => {
    const response = await getData();
    return res.status(200).send(response.data)
  })
}