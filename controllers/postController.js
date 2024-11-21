const postsList = require('../data/posts')
let lastIndex = postsList.at(-1).id
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
    lastIndex ++
    const newPost = {
        id: lastIndex,
        name: req.body.name,
        image: req.body.image,
        ingredients: req.body.ingredients
    }

    postsList.push(newPost)
    res.send('Creazione del post')
    console.log(req.body)
    console.log(postsList)
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
    const id = parseInt(req.params.id)
    const postIndex = postsList.findIndex((post) => post.id === id);
    
    if(postIndex === -1) {
        res.status(404)
        return res.json({
            error:  "Post not found",
            message: "Post non trovato"
        })
    }

    postsList.splice(postIndex, 1)
    res.sendStatus(204)
    console.log(postsList)

}

module.exports = { index, show, store, update, modify, destroy }