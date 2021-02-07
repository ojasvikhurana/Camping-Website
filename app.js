let express = require("express");
let app = express();
let mongoose = require("mongoose");
app.set("view engine","ejs");
let Campground = require("./models/campground");
// let Comment = require("./models/comment");

mongoose.connect("mongodb://localhost/camppost",{ useNewUrlParser: true, useUnifiedTopology: true});

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.render("landing");
});

// Campground.create(
//     {
//         name: "Grante Hill",
//         image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         description:"This is a huge granite hill, no bathroom, no water, beautiful granite!"
//     }
//     ,function(err,camps){
//         if(err){
//             console.log("ERROR");
//             console.log(err);
//         }else{
            
//         }
//     }
// );

app.get("/campgrounds",function(req,res){
    //get all campgrounds from db
    Campground.find({},function(err,camps){
        if(err){
            console.log(err);
        }else{
            res.render("index",{campgrounds:camps});
        }
    })
    
});


app.post("/campgrounds",function(req,res){
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampground = {name:name,image:image,description:desc};
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

app.get("/campgrounds/:id",function(req,res){
    Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("show",{campground: foundCampground});
        }
    });
   
});

app.listen(3000);