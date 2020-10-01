let express = require("express");
let app = express();

app.set("view engine","ejs");



app.get("/",function(req,res){
    res.render("landing");
});


app.get("/campgrounds",function(req,res){
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
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.listen(3000);