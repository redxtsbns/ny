const express = require('express')
const app = express()
////////
const fs = require('fs')
fs.readFile('comments.json', (err, data) => {
  if (err) return console.log(err)
  const c = JSON.parse(data)
})
app.use('/show', (req, res) => {
  res.send(c)
})
app.use('/send', (req, res) => {
  const name = req.query.name
  const comment = req.query.comment
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const data = {
    name: name,
    comment: comment,
    date: `${month}-${day}-${year}`
  }
  if (!name || !comment) {
    res.send('Your Name/Comment is undefined:(')      
  } else {
    fs.writeFile('comments.json', JSON.stringify(data, null, 2), (err) => {
      if (err) return res.status(200).send("Failed to send")
      res.send("Success Send!")
    }
})
app.use('/script', (req, res) => {
  const key = req.query.key
  const x = JSON.parse(fs.readFileSync('k.json'))
  if (key in x.key) {
    if (x.type === "Free") return res.status(200).send(fs.readFileSync('./src/free-script.lua')
    if (x.type === "VIP") return res.status(200).send(fs.readFileSync('./src/vip_script-TSBNS.lua')
                                                      
  } else {
    res.send("Key is Invalid!")
  }
})
app.listen(5000, () => {
  console.log("Running!!")
})
