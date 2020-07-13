const functions = require('firebase-functions');

const getYouTubeVideos = require('./getYouTubeVideos')
const getYouTubePlayLists = require('./getYouTubePlayLists')
const getInstagramAccount = require('./getInstagramAccount')
const getMapLocations = require('./getMapLocations')

exports.getYouTubeVideos = functions.https.onRequest(getYouTubeVideos)
exports.getYouTubePlayLists = functions.https.onRequest(getYouTubePlayLists)
exports.getInstagramAccount = functions.https.onRequest(getInstagramAccount)
exports.getMapLocations = functions.https.onRequest(getMapLocations)
