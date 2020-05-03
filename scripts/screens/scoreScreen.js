function openScoreScreen(score, category) {
    const bodyContainer = $('<div class=\'scoreScreen\'></div>');

    bodyContainer.append(createResultsContainer(category, score));
    bodyContainer.append(createReturnButton());
    bodyContainer.append(createShareButton());
    bodyContainer.append(createFooter());
    bodyContainer.append(createFeedbackContainer());

    changeScreen(bodyContainer);
}

function createResultsContainer(category, score) {
    const div = $('<div></div>');

    div.append('<div class=\'categoryLabel\'>' + category + '</div>');
    div.append('<div class=\'scoreLabel\'>' + score + '</div>');

    return div;
}

function createReturnButton() {
    const button = $('<button>Start Over</button>');

    button.click(function () {
        rootContainer.fadeOut(500, function () {
            openCategoryScreen();
        });
    });

    return button;
}

function createShareButton() {
    const button = $('<button>Share with your friends!</button>');

    button.click(function () {
        const shareData = {
            title: 'UNC Purity Test',
            text: 'How good of a Tar Heel are ya? Try this purity test!',
            url: 'https://komirisetti.com/UNCPurityTest',
        }

        try {
            navigator.share(shareData)
        } catch (err) {
            // TODO copy to clipboard
        }
    });

    return button
}

function createFeedbackContainer() {
    const div = $('<div class=\'feedbackDiv\'><div>Got idea\'s for questions or categories?</div></div>');
    const inputBox = $('<textarea rows="10"></textarea>');
    const button = $('<button>Send!</button>');
    button.click(function () {
        div.empty();
        div.removeClass('feedbackDiv');
        div.text('Sending...');

        $.post('https://feedback-unc-purity.herokuapp.com/feedback', {
                feedback: inputBox.val()
            },
            function (returnedData) {
                div.addClass('feedbackSubmitted');
                div.text('Sent! Thanks!');
            });
    });

    div.append(inputBox);
    div.append(button);

    return div;
}