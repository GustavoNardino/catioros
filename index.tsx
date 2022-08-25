const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require ('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req,res) => {
    res.json('hello world from backend')
})

app.get('/dogs', (req,res) => {
    const options = {
        method: 'GET',
        url: ' https://api.thedogapi.com/v1/images/search',
        headers: {
            'x-api-host': 'api.thedogapi.com',
            'x-api-key': process.env.REACT_APP_RAPID_API_KEY
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

app.listen(8000, () => console.log(`Server running on port ${PORT}`))
