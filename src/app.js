// Calls express, hbs and path libraries
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

// Define Path for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Sets render engine to hbs files, registers views and partial paths to hbs
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Calls the render to given address after the domain, e.g. 'about' renders at localhost:3000/about at dev port
app.get('', (req, res) => {
    res.render('index', {
        headerText: "Enter a sequence of letters and 'Calculate'",
        formID: "user-form",
        formInputID: "user-input",
        formType: "text",
        formLength: "10",
        placeHolder: 'e.g. abc',
        formPattern: "[A-Za-z\\s]{1,10}",
        formTitle: "Letters only [A-Za-z]",
        buttonText: "Calculate",
        textareaID: 'calculation',
        footer: "Groundswell Interview Demo",
    })
})


// Development port
app.listen(3000, () => {
    console.log('Server started!')
})