var express = require("express")
var app =express();
var fs = require("fs")
var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser')
app.use(bodyParser.json())

var model = require('./models/EventCollection.model')
var Movies = require('./models/MovieCollection.model')
var mongoose = require('mongoose');
const { title } = require("process");
mongoose.connect("mongodb+srv://Ayyappa:ayyappa666@cluster0.m2y7b.mongodb.net/EventCollection?retryWrites=true&w=majority&appName=Cluster0")
.then((data)=>{console.log("Connected")})
.catch((err)=>{console.log("Not Connected")})

app.get('/events',(req,res)=>{
    model.find()
    .then((data)=>{
        res.json(data)
        console.log(data)
    }).catch((err)=>{console.log(err)})
})

app.get('/events/:id',(req,res)=>{
    console.log(req.params.id)
    model.findById(req.params.id)
    .then((data)=>{
        res.json(data)
        console.log(data)
    }).catch((err)=>{console.log(err)})
})

app.post('/addevents',(req,res)=>{
    var newmodel = new model(req.body);
    newmodel.save().then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err)})
})

app.post('/efilter',async(req,res)=>{
    console.log(req.body)
    var data = await model.find({$or:req.body})
        res.json(data)
})

app.get('/efilter/:id',(req,res)=>{
    console.log(req.params.title)
    model.find({title:req.params.title})
    .then((data)=>{
        console.log(data)
        res.json(data)
    })
})

app.get('/movies',(req,res)=>{
    Movies.find()
    .then((data)=>{
        res.json(data)
        console.log(data)
    })
    .catch((err)=>{console.log(err)})
})

app.get('/movies/:id',(req,res)=>{
    console.log(req.params.id)
    Movies.findById(req.params.id)
    .then((data)=>{
        res.json(data)
        console.log(data)
    })
    .catch((err)=>{console.log(err)})
})

app.post('/addmovies',(req,res)=>{
    var newMovies = new Movies(req.body);
    newMovies.save().then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err)})
})

app.post('/mfilter',async(req,res)=>{
    console.log(req.body)
    var data = await Movies.find({$or:req.body})
    res.json(data)
})

app.get('/mfilter/:id',async(req,res)=>{
    console.log(req.params.title)
    try{
        const data = await Movies.find({movieTitle:req.params.title})
        console.log("responsedata::"+data)
        res.json(data)
    }
    catch(err){
        console.log("data not found")
    }
})

app.listen(6400,()=>{
    console.log("server is running on port 6400")
})