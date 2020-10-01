let express = require("express");
let app = express();

app.set("view engine","ejs");

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("landing");
});

let campgrounds = [
    { 
        name: "Salmon Creek",
        image:"https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    { 
        name: "Granite Hill",
        image:"https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    { 
        name: "Pink Floyd",
        image:"https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
];

app.get("/campgrounds",function(req,res){
    
    res.render("campgrounds",{campgrounds:campgrounds});
});


app.post("/campgrounds",function(req,res){
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name:name,image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});


app.listen(3000);