const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get(`/vernota/`, (req, res) => {
    const nota = Number(req.query.primero)
    let resultado = nota>4 ? `Aprobado`
    let resultado = nota<4 ? `Suspendido`

    res.send(resultado)
})