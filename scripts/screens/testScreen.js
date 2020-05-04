function openTestScreen(category) {
    let bodyContainer = $('<div class=\'bodyContainer\'></div>');

    bodyContainer.append('<div class=\'pageTitle\'>' + category + '</div>');
    bodyContainer.append(createCheckBoxes(category));
    bodyContainer.append(createSubmitButton(category));
    changeScreen(bodyContainer);
    theYams();
}

function createSubmitButton(category) {
    const submitButton = $('<button class=\'submitButton\'>Submit!</button>');

    submitButton.click(function () {
        const scoreTotal = 100 - $('input:checkbox:checked').length;
        $.post('https://feedback-unc-purity.herokuapp.com/score?score=' + scoreTotal + '&category=' + category);

        rootContainer.fadeOut(500, function () {
            openScoreScreen(scoreTotal, category);
        });
    });

    return submitButton;
}

function createCheckBoxes(category) {
    const checkboxesDiv = $('<form class=\'ac-custom ac-checkbox ac-boxfill test\'></form>'); // add numbers
    const ul = $('<ul></ul>')
    let i = 1;
    getQuestions(category).forEach(question => {
        ul.append(`
            <li class='questionBox'>
                <input type='checkbox' id='${question}'>                
                    <label for='${question}'>${i}. ${question}</label>
                </input>
            </li>
            <hr>
        `);
    i++;
    });
    checkboxesDiv.append(ul);
    return checkboxesDiv;
}