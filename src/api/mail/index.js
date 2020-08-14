import axios from "axios"

/**
 * Mail API Class
 */
export default class MailAPI {
  /**
   * Init class
   */
  constructor() {
    this.client = axios.create({
      baseURL: "https://us-central1-matan-website.cloudfunctions.net",
      "Content-Type": "application/json"
    })
  }

  /**
   * Send email
   *
   * @param {string} email - client's email
   * @param {string} name - client's name
   * @param {string} body - message body
   * @returns {Promise.<*>} - send email promise
   */
  send(email, name, body) {
    return this.client.post("/sendEmail", {
      clientEmail: email,
      clientName: name,
      subject: `A new message from ${name}`,
      body
    })
  }
}
