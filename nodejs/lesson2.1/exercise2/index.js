const express = require('express')
const app = express()
const port = 3010

app.use(express.static('public'))

app.get('/')

app.listen(port)
