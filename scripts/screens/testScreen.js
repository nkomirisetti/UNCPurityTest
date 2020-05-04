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
        rootContainer.fadeOut(500, function () {
            openScoreScreen($('input:checkbox:checked').length, category);
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