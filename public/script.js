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
        if (validateSurvey(surveyData)) {
            $.post("/api/friends", surveyData, function(response) {
                console.log(response)
                showModal(response.name, response.photo)
            })
        }
        else showAlert('Please answer all of the questions!')
    })

    $("#clear-modal").on('click', function() {
        // Click listener for the "OK" button in the alert box to be clicked. 
        // When it is cleared, this hides the alert until it is needed again.
        event.preventDefault();
        $(".modal").hide();
    });

    $("#clear-alert").on('click', function() {
        // Click listener for the "OK" button in the alert box to be clicked. 
        // When it is cleared, this hides the alert until it is needed again.
        event.preventDefault();
        $(".alert").hide();
    });

    $("#retake-survey").on('click', function() {
        // Clear all info from the survey questions and navigate back to the top of the page 
        //   so that the user can restart the survey with a new entry.
        window.scrollTo(0, 0)
        location.reload()
    });
})

function showModal(theName, imgSrc) {
    // This function shows a modal alert div, and places the alertText into the display div. 

    // define the variables that center the div on the page based on the height and width of the page
    var alertTop = Math.floor((($(window).height())/2) - 300);
    var alertLeft = Math.floor((($(window).width())/2) - 300);

    // set the img src for the match's image
    $("#match-image").attr('src', imgSrc)

    // set the name of the match
    $(".match-text").text(theName);

    // set the left and top attributes of the div to re-center the div in the wondow
    $(".modal").css('top', alertTop);
    $(".modal").css('left', alertLeft);

    //show the div as a modal alert
    $(".modal").show();
}

function showAlert(alertText) {
    // This function shows a modal alert div, and places the alertText into the display div. 

    // define the variables that center the div on the page based on the height and width of the page
    var alertTop = Math.floor((($(window).height())/2) - 100);
    var alertLeft = Math.floor((($(window).width())/2) - 150);

    // set the alert text
    $(".alert-text").text(alertText);

    // set the left and top attributes of the div to re-center the div in the wondow
    $(".alert").css('top', alertTop);
    $(".alert").css('left', alertLeft);

    //show the div as a modal alert
    $(".alert").show();
}

const validateSurvey = (surveyObject) => {
    console.log("validation function called!")
    let validated = true
    if (surveyObject.name === "") validated = false
    if (surveyObject.photo === "") validated = false
    surveyObject.scores.forEach(item => { 
        if (!item) {
            console.log("miss found")
            validated = false
            console.log(validated)
        }
    })
    console.log(validated)
    return validated
}