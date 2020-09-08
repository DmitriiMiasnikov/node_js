const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/api/auth', require('./routes/authRoutes'))

const PORT = config.get('port') || 3000

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifyTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log('server has started'))
    } catch (e) {
        console.log('server error', e.message)
        process.exit(1)
    }
}