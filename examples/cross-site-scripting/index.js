const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, 'public/')))

app.get('/users', function (req, res) {
  res.json({
    users: [
      {
        name: 'John Doe',
        age: 26
      },
      {
        name: 'Jane Doe',
        age: 31
      },
      {
        name: '<img src=x onerror=alert(1) />',
        age: 25
      }
    ]
  })
})

app.listen(3000, _ => console.log('http://localhost:3000'))
