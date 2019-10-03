// Imports
const express = require('express')

// App setup
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/heartrate', (req, res) => {
    console.log('data received', req.body)
    res.status(201).send({ ...req.body, received: true })
})

// Server instance
app.listen(3000, () => console.log('App running on port 3000'))
