const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/convierte/', (req, res) => {
    const euros = Number(req.query.euros)
    const resultado = euros * 1.2
    const cadena = `<h2> Resultado de la conversión </h2>
                    <p> La cantidad de ${euros}
                    convertida a dolares son: </p>
                    <h3> ${resultado} </h3>
                    <p> Gracias por utilizar este conversor. </p>

    res.send(cadena)
})

app.get('/convierte/', (req, res) => {
    const euros = Number(req.query.euros)
    const resultado = euros * 0,000024
    const cadena = `<h2> Resultado de la conversión </h2>
                    <p> La cantidad de ${euros} convertida a bitcoins son: </p>
                    <h3> ${resultado} </h3> <br>
                    <p> Gracias por utilizar este conversor. </p>

    res.send(cadena)
})

app.all('/', (req, res) => {
    res.send(`<p>Puedes ir a la siguiente dirección:
                <br>localhost:5000/convierte/?euros=100
                <br><br> Cambiar número de euros y probar funcionamiento
            `)
});

app.listen(5000, () => console.log('Server ready on localhost:5000'))