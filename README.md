# grabbi [![Build Status](https://travis-ci.org/xdk78/grabbi.svg?branch=master)](https://travis-ci.org/xdk78/grabbi)
     simple web scraper/crawler

grabbi using JSDOM and axios under hood provide simple but powerful way for scraping websites.

## Install grabbi
    npm i grabbi
    
## Usage
```js
const grabbi = require('grabbi')

grabbi('https://www.github.com').then(({ res, raw }) => {
  console.log(res.title)
  console.log(res.querySelector('p[class="alt-lead mb-4"]').textContent)
}).catch(err => console.log(err))
```
