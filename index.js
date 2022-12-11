//IMPORTING THE 'FS' MODULE IN NODEJS
//IMPORTING THE 'HTTP' MODULE IN NODEJS

const fs = require("fs");
const http = require("http");

//CREATING THE INDEX.HTML FILE USING NODEJS
fs.writeFile("index.html", "<h1>Hello World</h1>", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

//APPENDING THE CONTENT IN THE INDEX.HTML USING NODEJS FS MODULE
fs.appendFile("index.html", "\n<p>This is Noor Mohammed</p>", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

// CREATING THE SERVER USING THE NODEJS AND WITH RES IM READING THE FILE AND WRITING THAT CONTENT.
const server = http.createServer(function (req, res) {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

// LISTENING THAT CONTENT AT THE PORT 5000
server.listen(5000, () => {
  console.log("server is running at the port 5000");
});
