var mongoose = require('mongoose')
var eventSchema = mongoose.Schema({
    category:String,
    title:String,
    image:String,
    price:String,
    location:String,
    venue:String,
    language:String,
    description:String,
    eventdate:String
})

var Event = mongoose.model('Event',eventSchema)
module.exports = Event