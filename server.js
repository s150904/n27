// Klassendefinition

class Kunde{
    constructor(){
        this.Name
        this.Mail
        this.IdKunde
        this.Kennwort
        this.Geburtsdatum
        this.Adresse
        this.Telefon    }
}

// Deklaration und Instanziierung

let kunde = new Kunde

// Initalisierung

kunde.Name = "Zuki"
kunde.Mail = "zuki@gmail.com"
kunde.IdKunde = "4711"
kunde.Kennwort = "123"

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const iban = require ('iban')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Beim Aufrufen der Startsseite wird die app.get('/'...) abgearbeitet.

app.get('/',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('index.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/login',(req, res, next) => {         
    res.cookie('istAngemeldetAls', '')       
    res.render('login.ejs', {                    
    })
})

app.get('/login',(req, res, next) => {   
    res.render('login.ejs', {                    
    })
})

// app.post() wird abgearbeitet, wenn der Nutton gedrückt wird.

app.post('/',(req, res, next) => {   

    // Der Wert aus dem Input mit dem
    // name = 'idKunde' wird über die Anfrage(req) an den Server gesendet und zugewiesen an eine Konstante namens idKunde

    const idKunde = req.body.idKunde
    const kennwort = req.body.kennwort

    // Wenn der Wwrt von idKunde gleich dem Wert der Eigenschaft IdKunde von Kunde ist UND 
    // wenn der Wert von Kennwort gleich dem Wert der Eigenschaft Kennwort von Kunde ist, dann werden die Anweisungen im
    // Rumpf der if-Kontrollstruktur ausgeführt.

    if(idKunde ==="4711" && kennwort =="123"){
        console.log("Der Cookie wird gesetzt")
        res.cookie('istAngemeldetAls','idKunde')
        res.render('index.ejs', {                    
        })
    }else{
        console.log("Der Cookie wird gelöscht")
        res.cookie('istAngemeldetAls','')
        res.render('login.ejs', {                    
        })
    }
})

app.get('/impressum',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('impressum.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('kontoAnlegen.ejs', { 
            meldung : ""                             
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.post('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){

        let konto = new Konto()
        konto.Kontonummer = req.body.kontonummer
        konto.Kontoart = req.body.kontoart
        const bankleitzahl = "27000000"
        const laenderkennung = "DE"
        let errechneteIban = iban.fromBBAN(laenderkennung, bankleitzahl + " " + req.body.kontonummer)
        console.log(errechneteIban)
        
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('kontoAnlegen.ejs', {                              
           meldung : "Das Konto " + konto.Kontonummer + " wurde erfolgreich angelegt." 
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/profilBearbeiten',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('kontoAnlegen.ejs', { 
            meldung : "Das Profil wurde aktualisiert."                             
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})
app.post('/profilBearbeiten',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        let kunde = new Kunde()
        kunde.Name = req.body.kontonummer
        kunde.Geburtsdatum = req.body.kontoart
        kunde.Mail = req.body.kontoart
        kunde.Telefon = req.body.kontoart

        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('profilBearbeiten.ejs', {                              
           meldung : "Das Profil wurde aktualisiert." 
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})
