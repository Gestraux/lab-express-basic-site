const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`listening on port 3000`)
  })

app.get('/views/home.html', (req, res) => {
  res.send('Home Page')
})

app.get('/views/about.html', (req, res) => {
    res.send('About Page')
})

app.get('/views/works.html', (req, res) => {
    res.send('Works Page')
})

app.get('/views/gallery.html', (req, res) => {
    res.send('Gallery Page')
})