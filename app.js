const express = require("express");
const app = express();
const PORT = process.env.PORT ||3000;
const mongoose = require("mongoose");
let url = "mongodb://localhost:27017//dalhav";
// DB연결
mongoose.connect(url, {useNewUrlParser:true});

/*app.get("/", function(req,res) {
    res.send("Hello World");
});

app.get("/bye", function(req,res){
    res.send("Bye World");
});

app.listen(PORT, function (){
    console.log("Example app listening on port", PORT);
});*/

// routes (라우터)
const indexRoute = require("./routes/index");

// 뷰엔진 설정
app.set("views",__dirname+"/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public")); // 절대경로

// use routes (라우터의 사용)
app.use("/", indexRoute);


// listen
app.listen(PORT,function(){
    console.log("Example app listening on port", PORT);
});


