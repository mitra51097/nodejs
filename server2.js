let http =require("http");
let server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>welcome to server2</h1>");
    res.end();
});
server.listen(8082,()=>{
    console.log("server2 running at port 8082")
});
