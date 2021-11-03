const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const  app = express();



function after(s){
  console.log(s);
}
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');

app.get("/",function(req,res){
  res.render("index");
});


app.post("/",function(req,res){

dept = (req.body.dept);
reg = (req.body.reg);
sem = Number(req.body.sem);

});

app.get("/auto/r19/1",function(req,res){
  res.render("auto/auto-r19-1");
});
app.get("/auto/r19/2",function(req,res){
  res.render("auto/auto-r19-2");
});
app.get("/auto/r19/3",function(req,res){
  res.render("auto/auto-r19-3");
});

app.get("/auto/r19/4",function(req,res){
  res.render("auto/auto-r19-4");
});
app.get("/auto/r19/5",function(req,res){
  res.render("auto/auto-r19-5")
});
app.get("/auto/r19/6",function(req,res){
  res.render("auto/auto-r19-6")
});
app.get("/auto/r19/7",function(req,res){
  res.render("auto/auto-r19-7")
});
app.get("/auto/r19/8",function(req,res){
  res.render("auto/auto-r19-8")
});
app.get("/mech/r19/1",function(req,res){
  res.render("mech/mech-r19-1")
});
app.get("/mech/r19/2",function(req,res){
  res.render("mech/mech-r19-2")
});

app.get("/mech/r19/3",function(req,res){
  res.render("mech/mech-r19-3")
});
app.get("/mech/r19/4",function(req,res){
  res.render("mech/mech-r19-4")
});
app.get("/mech/r19/5",function(req,res){
  res.render("mech/mech-r19-5")
});
app.get("/mech/r19/6",function(req,res){
  res.render("mech/mech-r19-6")
});
app.get("/mech/r19/7",function(req,res){
  res.render("mech/mech-r19-7")
});
app.get("/mech/r19/8",function(req,res){
  res.render("mech/mech-r19-8")
});

app.get("/auto/r15/1",function(req,res){
  res.render("auto/auto-r15-1")
});
app.get("/auto/r15/2",function(req,res){
  res.render("auto/auto-r15-2")
});
app.get("/auto/r15/3",function(req,res){
  res.render("auto/auto-r15-3")
});
app.get("/auto/r15/4",function(req,res){
  res.render("auto/auto-r15-4")
});
app.get("/auto/r15/5",function(req,res){
  res.render("auto/auto-r15-5")
});
app.get("/auto/r15/6",function(req,res){
  res.render("auto/auto-r15-6")
});

app.get("/auto/r15/7",function(req,res){
  res.render("auto/auto-r15-7")
});
app.get("/auto/r15/8",function(req,res){
  res.render("auto/auto-r15-8")
});
//RPT-R19
app.get("/rpt/r19/1",function(req,res){
  res.render("rpt/rpt-r19-1")
});
app.get("/rpt/r19/2",function(req,res){
  res.render("rpt/rpt-r19-2")
});
app.get("/rpt/r19/3",function(req,res){
  res.render("rpt/rpt-r19-3")
});
app.get("/rpt/r19/4",function(req,res){
  res.render("rpt/rpt-r19-4")
});
app.get("/rpt/r19/5",function(req,res){
  res.render("rpt/rpt-r19-5")
});
app.get("/rpt/r19/6",function(req,res){
  res.render("rpt/rpt-r19-6")
});
app.get("/rpt/r19/7",function(req,res){
  res.render("rpt/rpt-r19-7")
});
app.get("/rpt/r19/8",function(req,res){
  res.render("rpt/rpt-r19-8")
});
//AERO-r19
app.get("/aero/r19/1",function(req,res){
  res.render("aero/aero-r19-1")
});
app.get("/aero/r19/2",function(req,res){
  res.render("aero/aero-r19-2")
});
app.get("/aero/r19/3",function(req,res){
  res.render("aero/aero-r19-3")
});
app.get("/aero/r19/4",function(req,res){
  res.render("aero/aero-r19-4")
});
app.get("/aero/r19/5",function(req,res){
  res.render("aero/aero-r19-5")
});
app.get("/aero/r19/6",function(req,res){
  res.render("aero/aero-r19-6")
});
app.get("/aero/r19/7",function(req,res){
  res.render("aero/aero-r19-7")
});
app.get("/aero/r19/8",function(req,res){
  res.render("aero/aero-r19-8")
});
//ECE-R19
app.get("/ece/r19/1",function(req,res){
  res.render("ece/ece-r19-1")
});
app.get("/ece/r19/2",function(req,res){
  res.render("ece/ece-r19-2")
});
app.get("/ece/r19/3",function(req,res){
  res.render("ece/ece-r19-3")
});
app.get("/ece/r19/4",function(req,res){
  res.render("ece/ece-r19-4")
});
app.get("/ece/r19/5",function(req,res){
  res.render("ece/ece-r19-5")
});
app.get("/ece/r19/6",function(req,res){
  res.render("ece/ece-r19-6")
});
app.get("/ece/r19/7",function(req,res){
  res.render("ece/ece-r19-7")
});
app.get("/ece/r19/8",function(req,res){
  res.render("ece/ece-r19-8")
});
//Information Technology - R19

app.get("/it/r19/1",function(req,res){
  res.render("it/it-r19-1")
});
app.get("/it/r19/2",function(req,res){
  res.render("it/it-r19-2")
});
app.get("/it/r19/3",function(req,res){
  res.render("it/it-r19-3")
});
app.get("/it/r19/4",function(req,res){
  res.render("it/it-r19-4")
});
app.get("/it/r19/5",function(req,res){
  res.render("it/it-r19-5")
});
app.get("/it/r19/6",function(req,res){
  res.render("it/it-r19-6")
});
app.get("/it/r19/7",function(req,res){
  res.render("it/it-r19-7")
});
app.get("/it/r19/8",function(req,res){
  res.render("it/it-r19-8")
});

//Instrementation

app.get("/ins/r19/1",function(req,res){
  res.render("ins/ins-r19-1")
});

app.get("/ins/r19/2",function(req,res){
  res.render("ins/ins-r19-2")
});
app.get("/ins/r19/3",function(req,res){
  res.render("ins/ins-r19-3")
});
app.get("/ins/r19/4",function(req,res){
  res.render("ins/ins-r19-4")
});
app.get("/ins/r19/5",function(req,res){
  res.render("ins/ins-r19-5")
});
app.get("/ins/r19/6",function(req,res){
  res.render("ins/ins-r19-6")
});
app.get("/ins/r19/7",function(req,res){
  res.render("ins/ins-r19-7")
});
app.get("/ins/r19/8",function(req,res){
  res.render("ins/ins-r19-8")
});
//production
app.get("/pr/r19/1",function(req,res){
  res.render("pr/pro-r19-1")
});
app.get("/pr/r19/2",function(req,res){
  res.render("pr/pro-r19-2")
});

app.get("/pr/r19/3",function(req,res){
  res.render("pr/pro-r19-3")
});
app.get("/pr/r19/4",function(req,res){
  res.render("pr/pro-r19-4")
});
app.get("/pr/r19/5",function(req,res){
  res.render("pr/pro-r19-5")
});
app.get("/pr/r19/6",function(req,res){
  res.render("pr/pro-r19-6")
});
app.get("/pr/r19/7",function(req,res){
  res.render("pr/pro-r19-7")
});
app.get("/pr/r19/8",function(req,res){
  res.render("pr/pro-r19-8")
});


app.get("/cs/r18/1",function(req,res){
  res.render("cs/cs-r18-1")
});
app.get("/cs/r18/2",function(req,res){
  res.render("cs/cs-r18-2")
});

app.get("/cs/r18/3",function(req,res){
  res.render("cs/cs-r18-3")
});
app.get("/cs/r18/4",function(req,res){
  res.render("cs/cs-r18-4")
});
app.get("/cs/r18/5",function(req,res){
  res.render("cs/cs-r18-5")
});
app.get("/cs/r18/6",function(req,res){
  res.render("cs/cs-r18-6")
});
app.get("/cs/r18/7",function(req,res){
  res.render("cs/cs-r18-7")
});
app.get("/cs/r18/8",function(req,res){
  res.render("cs/cs-r18-8")
});

app.get("/contact", function(req, res){
  res.render("contact");
});
app.get("/index", function(req, res){
  res.render("index");
});





app.listen(process.env.PORT||1801,function(){
  console.log("Server running...");
})
