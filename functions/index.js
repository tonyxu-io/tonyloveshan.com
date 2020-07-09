const functions = require('firebase-functions');

const getYouTubeVideos = require('./getYouTubeVideos')
const getInstagramAccount = require('./getInstagramAccount')
const getMapLocations = require('./getMapLocations')

exports.getYouTubeVideos = functions.https.onRequest(getYouTubeVideos)
exports.getInstagramAccount = functions.https.onRequest(getInstagramAccount)
exports.getMapLocations = functions.https.onRequest(getMapLocations)