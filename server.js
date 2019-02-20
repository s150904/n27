// Das ist ein einzeiliger Kommentar
/* Das ist ein mehrzeiliger Kommentar */

// Der Bodyparser bereitet die Daten aus dem HTML-Formular vor der Übergabe an die server.js auf.
// Der Bodyparser muss über das Terminal installiert werden.
// npm install body-parser --save
const bodyParser = require('body-parser')

const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Der Server ist erfolgreich gestartet auf Port %s', server.address().port)
})

app.get('/',())