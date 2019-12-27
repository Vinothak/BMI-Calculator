const express= require("express");
const bodyParser =require("body-parser")
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',function(req,res){
  res.sendFile(__dirname+"/file.html");
});

app.post("/", function(req,res){

  var weight=Number(req.body.num1);
  var height=Number(req.body.num2);
  var result=weight/(height*height);
  if(result>18.5 && result<25)
  res.send("your are healthy and your BMI is "+result);
  else if(result>=25)
  res.send("your are little fat,please take care of your diet");
  else if(result<18.5)
  res.send("your are thin,please eat properly");
});

app.listen(8080,function(){
  console.log("server has started on port 8080");
});
