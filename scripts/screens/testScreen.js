function openTestScreen(category) {
    let bodyContainer = $('<div class=\'bodyContainer\'></div>');

    bodyContainer.append('<div class=\'pageTitle\'>' + category + '</div>');
    bodyContainer.append(createCheckBoxes(category));
    bodyContainer.append(createSubmitButton(category));

    changeScreen(bodyContainer);
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
    const checkboxesDiv = $('<ul></ul>'); // add numbers
    let i = 1;
    getQuestions(category).forEach(question => {
        checkboxesDiv.append(`
            <li class='questionBox'>
                <input type='checkbox' id='${question}'>
                <label for='${question}'>${i}. ${question}</label>
            </li>
        `);
    i++;
    });
    return checkboxesDiv;
}