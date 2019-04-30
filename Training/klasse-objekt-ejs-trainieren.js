const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Eine Klasse ist ein Bauplan.
// Ein Objekt ist die konkrete Umsetzung auf der Grundlage des Bauplans. 
// Alle Objekte eines Bauplans haben dieselben Eigenschaften, aber möglicherweise unterschiedliche Eigenschaftswerte.

// Klassendefinition
//******************

class Rechteck{
    constructor(){
        this.laenge
        this.breite
    }
}

class Schueler{
    constructor(){
        this.geschlecht
        this.vorname
        this.alter
    }
}

class Spieler{
    constructor(){
        this.name
        this.alter
        this.verein
        this.nummer
    }
}

class Pullover{
    constructor(){
        this.stoff
        this.farbe
        this.marke
    }
}

// Deklaration eines Rechteck-Objekts vom Typ Rechteck
// Deklaration = Bekanntmachung, dass es ein Objekt vom Typ Rechteck geben soll.

// let rechteck = ...

// Instanziierung erkennt man am reservierten Wort "new".
// Instanziierung reserviert Speicherzellen für das soeben deklarierte Objekt.

// ...= new Rechteck()

// Initialisierung belegt die reservierten Speicherzellen mit konkreten Eigenschaftswerrten.

// rechteck.breite = 3

let rechteck = new Rechteck()
rechteck.breite = 3
rechteck.laenge = 2

console.log("Breite : " + rechteck.breite)
console.log("Länge : " + rechteck.laenge)
console.log(rechteck)

let schueler = new Schueler()
schueler.geschlecht = "w"
schueler.vorname = "Ronja"
schueler.alter = 17

let spieler = new Spieler()
spieler.name = "Mario Götze"
spieler.alter = 26
spieler.verein = "Borussia Dortmund"
spieler.nummer = 10

let pullover = new Pullover()
pullover.stoff = "Baumwolle"
pullover.farbe = "rosa"
pullover.marke = "nike"

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {
        breite : rechteck.breite,
        laenge : rechteck.laenge,
        geschlecht : schueler.geschlecht,
        vorname : schueler.vorname,
        alter : schueler.alter,
        name : spieler.name,
        alter : spieler.alter,
        verein : spieler.verein,
        nummer : spieler.nummer,
        stoff : pullover.stoff,
        farbe : pullover.farbe,
        marke : pullover.marke                          
    })
})