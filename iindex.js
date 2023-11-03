const express = require('express');
const mongoose = require('mongoose');
const videoRouter= require('./videoRouter');

const app = express();
app.use(express.json());

const DBURL = "mongodb://localhost:27017/youtubeclone"
mongoose.connect(DBURL)
.then(()=> {console.log("database is connected", DBURL)})
.catch((error) => {console.log("can't connect DB", error)})

app.get('/', function(req, res)  {
    return res.send("Hello, world!");
})
//additional routes
app.use(videoRouter);
//app.get('/videos', function(req, res) {
  //  return res.send([{id:"1",link:"some vdo link"}])
//})
//app.post('/videos', function(req, res) {
   // console.log(req.body)
   // return res.send([{body: req.body ,reponse: "success"}]);
//})
app.listen(1500,function()
{

console.log("app server is running on 1500");

})

