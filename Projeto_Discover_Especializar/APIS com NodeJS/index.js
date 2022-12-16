const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/suamirocha')
        .then(result => res.send(result.data))
        .catch(error => console.error(error))
})

// //middleware
// app.use(express.json())

// let author = "Suami"

// app.use(express.json())

// app.route('/').get((req, res) => res.send(author))

// app.route('/').put((req, res) => {
//     author = req.body.author
//     res.send(author)
// })