// importing the http module 
const http = require("http")
const{createfun,readfun,updatefun,deletefun} = require('./newmodel.js');

// creating server
const server = http.createServer((req,res) => {
    console.log(req.method, req.url);
    if(req.url=='/create' && req.method=='POST'){
        res.write(JSON.stringify(createfun(10)))
    }
    else if (req.url =='/read' && req.method=='GET'){
        res.write(JSON.stringify(readfun()))
    }
    else if (req.url =='/update'){
        res.write(JSON.stringify(updatefun(0,100)))
    }
    else if (req.url =='/delete'){
        res.write(JSON.stringify(deletefun(0)))
    }
    //sendind the response
     
     res.end();
})
server.listen(5000, function(){     
    
    console.log("server run on port 5000!")
});