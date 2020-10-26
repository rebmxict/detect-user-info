const functions = require('firebase-functions');
const os = require('os');
const path = require('path');
const admin = require('firebase-admin');

admin.initializeApp();

exports.collectUserInfo = functions.https.onRequest((req, res) => {
	var userIp = req.headers["x-appengine-user-ip"];
	var userAgent = req.headers["user-agent"];
	var now = Date.now();
	admin.database().ref('users/' + parseInt(now)).set({
		userIp: userIp,
		loggedIn: Date.now(),
		userAgent: userAgent
	});
	res.status(200).json({
		message: "collected"
	});
});