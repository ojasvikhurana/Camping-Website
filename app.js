let express = require("express");
let app = express();
let mongoose = require("mongoose");
app.set("view engine","ejs");

mongoose.connect("mongodb://localhost/camppost");

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

let Campground = mongoose.model("Campground",campgroundSchema);


app.get("/",function(req,res){
    res.render("landing");
});


app.get("/campgrounds",function(req,res){
    //get all campgrounds from db
    Campground.find({},function(err,camps){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds",{campgrounds:camps});
        }
    })
    
});


app.post("/campgrounds",function(req,res){
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name:name,image:image};
    Campground.create(
        newCampground
        ,function(err,camps){
            if(err){
                console.log("ERROR");
                console.log(err);
            }else{
                res.redirect("/campgrounds");
            }
        }
    );
   
});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});


app.listen(3000);