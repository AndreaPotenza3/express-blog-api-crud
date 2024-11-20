const postsList = require('../data/posts')

// INDEX

function index(req, res) {
    res.json(postsList)
}

// SHOW

function show(req, res) {
    const id = parseInt(req.params.id)
    const post = postsList.find(post => post.id === id);
    if(!post){
        return res.json({
        error: "Not Found",
        message: "Post non trovato"
        })
        }
    res.json(post)
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
    const id = parseInt(req.params.id)
    res.send(`Modificato il post con id ${id}`)
}

// DELETE

function destroy(req, res) {
    const id = req.params.id
    const post = postsList.find(post => post.id === id);
    postsList.splice(postsList.indexOf(post), 1)
    res.send(`Cancellazione post con id ${id}`)
}

module.exports = { index, show, store, update, modify, destroy }