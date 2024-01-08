const express = require('express')
const someConnection = require('./utils/errorHandling')

const app = express()

const port = 8000

app.get('/', async (req, res) => {
    try {
        const result = someConnection(res)
        res.json({ "" : result })
    } catch (err) {
        console.log("GET ERROR ", err);
        res.json({ "Error ": err.message })
    }
})

app.listen(port, () => {
    console.log(`Server running at : http://localhost:${port}`);
})