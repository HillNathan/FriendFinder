

module.exports = function(app, data) {

    app.get('/api/friends', (req,res) => {
        res.json(data.json)
    })

    app.post("/api/friends", (req, res) => {
        let foo = req.body
        let lowestScore = 41
        let lowestScoreIndex = 0
        const reducer = (accum, currValue, index) => accum + Math.abs(currValue - foo.scores[index])
        data.json.forEach((element,i) => {
            let value = element.scores.reduce(reducer, 0)
            if (value < lowestScore) {
                lowestScoreIndex = i
                lowestScore = value
            }
        })
        console.log(`lowest score of ${lowestScore} found at index ${lowestScoreIndex}.`)
        console.log("new input: " + foo.scores)
        data.json.push(foo)
        res.json(data.json[lowestScoreIndex])
    })
}