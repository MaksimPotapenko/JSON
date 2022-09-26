const express = require('express')
const app = express()
const db = require('./config')

app.get('/', function (req, res) {
 res.send('Hello World')
})

app.get('/categories', function(req, res){
    db.execute('SELECT * FROM category', (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

app.get('/actors/:id', function(req, res){
    db.execute('SELECT * FROM actor WHERE actor_id = '+req.params.id, (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

app.get('/film', function(req, res){
    db.execute('SELECT title FROM film', (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

app.get('/actor', function(req, res){
    db.execute('SELECT first_name, last_name FROM actor_info ORDER BY first_name, last_name', (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

app.get('/genre', function(req, res){
    db.execute('SELECT title FROM film_list WHERE category = 1', (error, result) => {
        if (error) throw error
        res.send(result)
    })
})


app.listen(8000)
