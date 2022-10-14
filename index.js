const express = require('express')


const app = express()

const hostname = '192.168.3.26'
const port = 5000

const books = [
    {_id: 1, title: "O dia do Coringa", autor: "Jostein Gaarden", favorito: true},
    {_id: 2, title: "O mundo de Sophia", autor: "Jostein Gaarden", favorito: true},
    {_id: 3, title: "A Casa", autor: "Raquel de Queiroz", favorito: false}
]


app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


//uri
app.get('/', (req, res) => {
    res.json({ nome: 'André Felipe'})
})

app.get('/html', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/books', (req, res) => {
    res.send(books.filter(i => i.favorito))
})  


app.listen(port, hostname, () => console.log(`http://${hostname}:${port}`))