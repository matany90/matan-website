const functions = require("firebase-functions")
const sendEmail = require("./handlers/send-email")

// export send email function
exports.sendEmail = functions.https.onRequest(sendEmail.handler)
