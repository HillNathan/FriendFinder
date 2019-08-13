


$(document).ready(() => {
    
    $("#submit-survey").click(() => {
        event.preventDefault();
        let surveyData = {}
        let tempArray = []
        tempArray.push(parseInt($("input[name='Question-1']:checked").val()))
        tempArray.push(parseInt($("input[name='Question-2']:checked").val()))
        tempArray.push(parseInt($("input[name='Question-3']:checked").val()))
        tempArray.push(parseInt($("input[name='Question-4']:checked").val()))
        tempArray.push(parseInt($("input[name='Question-5']:checked").val()))
        tempArray.push(parseInt($("input[name='Question-6']:checked").val()))
        tempArray.push(parseInt($("input[name='Question-7']:checked").val()))
        tempArray.push(parseInt($("input[name='Question-8']:checked").val()))
        tempArray.push(parseInt($("input[name='Question-9']:checked").val()))
        tempArray.push(parseInt($("input[name='Question-10']:checked").val()))

        surveyData = {
            ...surveyData,
            name: $("#survey-name").val(),
            photo: $("#survey-img").val(),
            scores: tempArray
        }
        // console.log(surveyData)
        $.post("/api/friends", surveyData, function(response) {
            console.log(response)
        })
    })



})
    


