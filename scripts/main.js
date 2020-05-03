var rootContainer;

$(document).ready(() => {
    rootContainer = $('#rootContainer');
    createCategoryScreen();
})

function createCategoryScreen() {
    let bodyContainer = $('<div class=\'bodyContainer\'></div>');

    bodyContainer.append('<div class=\'pageTitle\'>UNC Purity Test</div>');
    bodyContainer.append(createCategoriesComponent());
    bodyContainer.append(createFooter());

    changeScreen(bodyContainer);
}

function createCategoriesComponent() {
    let div = $('<div></div>');

    CATEGORIES.forEach(category => {
        let button = $('<button>' + category + '</button>');

        button.click(function () {
            rootContainer.fadeOut(500, function () {
                createTestScreen(category);
            });
        });

        div.append(button);
    });

    return div;
}

function createFooter() {
    return $('<div class=\'footerContainer\'>Made with 💙 by Nikhil Komirisetti</div>');
}

function createTestScreen(category) {
    let bodyContainer = $('<div class=\'bodyContainer\'></div>');

    bodyContainer.append('<div class=\'pageTitle\'>' + category + '</div>');
    bodyContainer.append(createCheckBoxes(category));
    bodyContainer.append(createSubmitButton(category));
    bodyContainer.append(createFooter());

    changeScreen(bodyContainer);
}

function createSubmitButton(category) {
    const submitButton = $('<button class=\'submitButton\'>Submit!</button>');

    submitButton.click(function () {
        rootContainer.fadeOut(500, function () {
            createScoreScreen($('input:checkbox:checked').length, category);
        });
    });

    return submitButton;
}

function createCheckBoxes(category) {
    const checkboxesDiv = $('<div></div>');
    getQuestions(category).forEach(question => {
        checkboxesDiv.append(`
            <div class='questionBox'>
                <input type='checkbox' id='${question}'>
                <label for='${question}'>${question}</label>
            </div>
        `);
    });
    return checkboxesDiv;
}

function createScoreScreen(score, category) {
    const bodyContainer = $('<div class=\'scoreScreen\'></div>');

    bodyContainer.append('<div class=\'categoryLabel\'>' + category + '</div>');
    bodyContainer.append('<div class=\'scoreLabel\'>' + score + '</div>');
    const returnButton = $('<button>Start Over</button>');
    returnButton.click(function () {
        bodyContainer.fadeOut(500, function () {
            createCategoryScreen();
        });
    });
    bodyContainer.append(returnButton);

    const shareButton = $('<button>Share with your friends!</button>')
    shareButton.click(function () {
        const shareData = {
            title: 'UNC Purity Test',
            text: 'How good of a Tar Heel are ya?',
            url: 'https://komirisetti.com/UNCPurityTest',
        }

        try {
            navigator.share(shareData)
        } catch (err) {
            // TODO copy to clipboard
        }
    });
    bodyContainer.append(shareButton);
    changeScreen(bodyContainer);
}

function changeScreen(div) {
    rootContainer.empty();
    rootContainer.append(div);
    rootContainer.fadeOut(0).fadeIn(500);
}