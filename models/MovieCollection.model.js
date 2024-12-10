var mongoose = require("mongoose")
var movieSchema = mongoose.Schema({
    movieImage:String,
    movieTitle:String,
    price:String,
    movieDuration:String,
    movieType:String,
    movieCensor:String,
    releaseDate:String,
    language:Array,
    aboutUs:String,
    movieFormats:Array,
})
var Movie = mongoose.model('Movie',movieSchema)
module.exports = Movie