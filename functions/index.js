const functions = require('firebase-functions');

const getYouTubeVideos = require('./getYouTubeVideos')
const getInstagramAccount = require('./getInstagramAccount')

exports.getYouTubeVideos = functions.https.onRequest(getYouTubeVideos)
exports.getInstagramAccount = functions.https.onRequest(getInstagramAccount)