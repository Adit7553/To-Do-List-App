const express = require("express")
require("./db/conn")
const User = require("./models/logindata")
const newUser1 = require("./models/regisdata")
const ToDoWork = require("./models/toDoData")
const hbs = require("hbs")
const path = require("path")
const bcrypt = require("bcrypt")
const async = require("hbs/lib/async")
const req = require("express/lib/request")
const { redirect } = require("express/lib/response")
const app = express();

const PORT = process.env.PORT || 3000


const staticpath = path.join(__dirname, "/public") 
app.use('/img', express.static(path.join(__dirname, "/public/images")))  
const temppath = path.join(__dirname, "../templates/views")
const partialpath = path.join(__dirname, "../templates/partials")


app.set("view engine", "hbs")
app.set("views", temppath)
hbs.registerPartials(partialpath)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(staticpath))

app.get("/", (req,res)=>{
    res.render('index')
})
// app.get('/main', (req,res)=>{
//     res.render('main')
// })
app.get("/register", (req,res)=>{
    res.render('register')
})


app.post('/register', async(req,res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const regisUser = new newUser1({
            name : req.body.name,
            email : req.body.email,
            password : hashedPassword
        })
        const reguserData = await regisUser.save()
        res.status(201).render("newuserpage")
    } catch(err) {
        res.status(403).send(err)
    }
})
app.post('/main', (req,res)=>{
    try {
        
        const DataToDo = new ToDoWork(req.body)
        const UsersToDoData = DataToDo.save();
        
    } catch (err) {
        res.render(404).send(err)
    }
  
})
app.post('/', async(req,res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const email = req.body.email
        const password = hashedPassword
        const useremail = await newUser1.findOne({email:email})
        if(await bcrypt.compare(req.body.password, useremail.password)){
            res.status(202).render('main')
        }else{
            res.status(401).send("invalid username or password")
        }
    } catch {
        res.status(400).send("User not exist")
    }
})
app.listen(PORT, ()=>{
    console.log(`Server is successfully running at port ${PORT}`);
})

