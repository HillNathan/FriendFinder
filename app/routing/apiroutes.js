module.exports = function(app, data) {

    app.get('/api/friends', (req,res) => {
        res.json(data.json)
    })

    app.post("/api/friends", (req, res) => {
        let foo = req.body
        console.log(foo)
        data.json.push(foo)
        res.json(foo)
    })
}