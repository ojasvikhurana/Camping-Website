var mongoose= require("mongoose");

let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
});

let Campground = mongoose.model("Campground",campgroundSchema);


module.exports = Campground;