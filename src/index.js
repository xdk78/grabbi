const axios = require('axios')
const { JSDOM } = require('jsdom')

async function grabbi (url, opts = { method: 'get' }) {
  try {
    const config = Object.assign({}, opts, { url: url })
    const response = await axios(config)
    const jsdom = new JSDOM(response.data)
    return {
      res: jsdom.window.document,
      raw: response.data
    }
  } catch (err) {
    throw new Error(`Can't scrap this: ${err.message}`)
  }
}

module.exports = grabbi
