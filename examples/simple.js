const grabbi = require('../src/index')

grabbi('https://www.github.com').then(({ res, raw }) => {
  console.log(res.title)
  console.log(res.querySelector('p[class="alt-lead mb-4"]').textContent)
}).catch(err => console.log(err))
