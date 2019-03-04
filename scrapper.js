const HTMLParser = require('node-html-parser')
const fetch = require('node-fetch')
const fs = require('fs')

let root;
const url = "https://medium.com/@songyishu.yang"
fetch(`${url}`)
  .then (res => res.text())
  .then (body => root = HTMLParser.parse(body))
  .then (() => extractData(root))

function extractData(root){
  const description = root.querySelector('p').rawText
  console.log(description)
  fs.writeFile('scrappeddata.json', JSON.stringify(description), function(err) {
      if (err) throw err;
      console.log('successfully saved file')}
  )
}
