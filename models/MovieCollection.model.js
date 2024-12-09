var mongoose = require("mongoose")
var movieSchema = mongoose.Schema({
    movieimage:String,
    movieTitle:String,
    price:String,
    movieDuration:String,
    movieType:String,
    movieCensor:String,
    releaseDate:String,
    language:String,
    aboutUs:String,
    movieFormats:Array,
})
var Movie = mongoose.model('Movie',movieSchema)
module.exports = Movie