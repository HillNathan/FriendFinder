const path = require("path")


module.exports = function(app) {  
    app.get("/survey", function(req, res) {
        return res.sendFile(path.join(__dirname, "../public/survey  .html"));
        })
    app.get("/", (req,res) => {
        return res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}