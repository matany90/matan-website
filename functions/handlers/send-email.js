// init firebase
const functions = require("firebase-functions")
const firebase = require("firebase-admin")
firebase.initializeApp()

// init nodemailer
const nodemailer = require("nodemailer")

/**
 * send custome email
 */
exports.handler = async (req, res) => {
  // pull data
  const { clientEmail, clientName, subject, body } = req.body

  try {
    // pull envs
    const { config } = functions.config()

    // create transporter instance
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.email,
        pass: config.password
      }
    })

    // define mail options
    const mailOptions = {
      from: config.email,
      to: config.destination_email,
      subject,
      html: `<div><h3>Got a new message from ${clientName}, his email is: ${clientEmail}</h3><p>${body}</p></div>`
    }

    // send mail
    const sentRes = await transporter.sendMail(mailOptions)

    // returns response
    res.json({ sentRes })
  } catch (e) {
    res.status(500).json({ error: "Unable to send an email." })
  }
}
