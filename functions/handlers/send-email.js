// init firebase
const functions = require("firebase-functions")
const firebase = require("firebase-admin")
firebase.initializeApp()

// init nodemailer
const nodemailer = require("nodemailer")

// cors
require("cors")({ origin: true })

/**
 * send custome email
 */
exports.handler = async (req, res) => {
  // set cors
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS")
  res.set("Access-Control-Allow-Headers", "*")

  try {
    let sentRes = {}

    // pull data
    const { clientEmail, clientName, subject, body } = req.body

    // pull envs
    const { config } = functions.config()

    // create transporter instance
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: config.email,
        pass: config.password
      }
    })

    if (Object.keys(req.body).length) {
      // define mail options
      const mailOptions = {
        from: config.email,
        to: config.destination_email,
        subject,
        html: `<div><h3>Got a new message from ${clientName}, his email is: ${clientEmail}</h3><p>${body}</p></div>`
      }

      // send mail
      sentRes = await transporter.sendMail(mailOptions)
    }

    // returns response
    res.json({ sentRes })
  } catch (error) {
    res.status(500).json({ error })
  }
}
