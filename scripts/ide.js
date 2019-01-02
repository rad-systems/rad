var path        = require("path"),
    http        = require("http"),
    express     = require("express"),
    brackets    = require("brackets"),
    app         = express(),
    server      = http.createServer(app);
 
app.get("/", function (req, res) {
    res.send("Hello World");
});

var options = {
    projectsDir: path.join(__dirname, ".."),
    supportDir: path.join(__dirname, "..", ".brackets/")
};
brackets(server, options);

server.listen(6800);

console.log("Your application is availble at http://dock.custom.website");
console.log("You can access Brackets on http://dock.custom.website/brackets/");