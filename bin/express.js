const express = require ('express')
const mongoose = require('mongoose')

const app = express()

// app.use(function(req, res, next) {
//     var locale = 'pt-BR'
//     req.(locale)
//     res.locals.language = locale
//     next()
// })

mongoose.connect('mongodb+srv://android:android@cluster0-ke8zt.mongodb.net/corpdb?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})


module.exports = app