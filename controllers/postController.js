const postsList = require('../data/posts')

// INDEX

function index(req, res) {
    res.send('Lista dei post')
}

// SHOW

function show(req, res) {
    const id = req.params.id
    res.send(`Ecco il post con id ${id}`)
}

// STORE

function store(req, res) {
    res.send('Creazione del post')
}

// UPDATE

function update(req, res) {
    const id = req.params.id
    res.send(`Aggiornato il post con id ${id}`)
}

// MODIFY

function modify(req, res) {
    const id = req.params.id
    res.send(`Modificato il post con id ${id}`)
}

// DELETE

function destroy(req, res) {
    const id = req.params.id
    res.send(`Cancellazione post con id ${id}`)
}

module.exports = { index, show, store, update, modify, destroy }