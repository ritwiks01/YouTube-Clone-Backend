const http = require('http');
const server = http.createServer(function(req, res){

    console.log(req.method, req.url);
    res.write("request looks good");
    res.end();
})
server.listen(5000, function(){     
    
    console.log("server run on port 5000!")
}
    );