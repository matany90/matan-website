/**
 * Checks if is email
 *
 * @param {string} email - email address
 * @returns {boolean} - returns true if email
 */
export const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

/**
 * Upper first letter
 * @param {string} string
 */
export const toUpper = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
