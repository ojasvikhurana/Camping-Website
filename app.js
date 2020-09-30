let express = require("express");
let app = express();

app.get("/",function(req,res){
    app.send("landing Page");
});


app.listen(3000);