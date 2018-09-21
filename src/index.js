const axios = require('axios')
const { JSDOM } = require('jsdom')

/**
 * @param {string} url
 * @param {Object} opts use `AxiosRequestConfig` as config
 * @see https://github.com/axios/axios#axios-api
 */
async function grabbi (url, opts = { method: 'get' }) {
  try {
    const config = Object.assign({}, opts, { url: url })
    const response = await axios(config)
    const jsdom = new JSDOM(response.data)
    return {
      doc: jsdom.window.document,
      res: response.data
    }
  } catch (err) {
    throw new Error(`Can not scrap this: ${err.message}`)
  }
}

module.exports = grabbi
