var http = require("http");
const url = require("url");

const httpServer = http.createServer(handleServer);
const Port = 8081;

function handleServer(req, res) {
  const Url = url.parse(req.url, true);
  const path = Url.pathname;
  const delpath = path.replace(/^\/+|\/+$/g, "");
  if (delpath === "welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Dominos!");
  }
  else if (delpath === "contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`{  
        phone: '18602100000', 
  	    email: 'guestcaredominos@jublfood.com' 
    }`)
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("error 404")
  }
}

httpServer.listen(Port, () => {
  console.log(`The server running on ${Port}`)
})

module.exports = httpServer;