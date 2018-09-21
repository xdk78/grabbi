const grabbi = require('../src/index')

grabbi('https://www.github.com').then(({ doc, res }) => {
  console.log(doc.title)
  console.log(doc.getElementsByClassName('alt-lead mb-4')[0].textContent)
}).catch(err => console.log(err))
