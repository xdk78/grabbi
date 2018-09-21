const grabbi = require('../src/index')

// you can use https://github.com/axios/axios#axios-api as config
const config = {
  method: 'get',
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' }
}

grabbi('https://en.wikipedia.org/wiki/Main_Page', config).then(({ doc, res }) => {
  console.log(doc.title)
  console.log(doc.querySelector('div[id="articlecount"]').textContent)
}).catch(err => console.log(err))
