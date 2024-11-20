console.log('hello')

const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')
// const postsList = require('./posts')

app.use("/posts", postsRouter)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('il server del blog')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})