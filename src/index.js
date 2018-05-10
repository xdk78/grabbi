const axios = require('axios')
const { JSDOM } = require('jsdom')

async function grabbi (url) {
  try {
    const response = await axios.get(url)
    const jsdom = new JSDOM(response.data)

    return { res: jsdom.window.document, raw: response.data }
  } catch (err) {
    throw new Error(`Cant scrap this: ${err.message}`)
  }
}

module.exports = grabbi
