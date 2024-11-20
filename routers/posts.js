
const express = require('express')
const router = express.Router()
const postsList = require('./posts')

// Index

router.get('/', (req, res) => {
    res.send('Lista dei post')
})

// Show

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Ecco il post con id ${id}`)
})

// Store

router.post('/', (req, res) => {
    res.send('Creazione del post')
})

// Update

router.put('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Aggiornato il post con id ${id}`)
})

// Modify

router.patch('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Modificato il post con id ${id}`)
})

// Delete

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Cancellazione post con id ${id}`)
})

module.exports = router
