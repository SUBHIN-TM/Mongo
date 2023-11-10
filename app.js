const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const port = 5000
const collection = require('./mongodb')
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './view'))




app.get('/', (req, res) => {
    res.render("login")
})

// app.post('/login',(req,res) =>{

// })

app.get('/signup', (req, res) => {
    res.render("signup")
})


app.post('/signup', async (req, res) => {
    try {
        let userData = req.body
        console.log(userData);
        const data = {
            name: req.body.userName,
            mail: req.body.userMail,
            password: req.body.userPassword
        }
        await collection.insertMany([data])
        console.log("successfully writed in mongodb and responded");
        return res.redirect('/login')

    } catch (error) {
        console.error("error written to MongoDB and responded");
        res.status(500).send("internal server error")
    }

})



























app.listen(port, () => {
    console.log(`server is running on ${port}`);
})