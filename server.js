class Konto{
    constructor(){
        this.Kontonummer
        this.Kontoart
    }
}

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

let kunde = new Kunde
kunde.Name = "Zuki"
kunde.Mail = "zuki@gmail.com"
kunde.IdKunde = "4711"
kunde.Kennwort = "123"

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

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

app.post('/',(req, res, next) => {   

    const idKunde = req.body.idKunde
    const kennwort = req.body.kennwort

    if(idKunde ==="4711" && kennwort ==="123"){
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
