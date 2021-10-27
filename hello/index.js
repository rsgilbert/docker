const express = require('express')

const app = express()


// test endpoint
app.get('/test', (req, res) => {
    res.send('Hello world')
})


process.env.PORT = 4001

// Try listening on PORT if you get an 
// error try the BACKUP_PORT
app.listen(process.env.PORT, () => {
    console.log('App started on port', process.env.PORT)
})