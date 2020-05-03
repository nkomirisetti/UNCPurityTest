function openScoreScreen(score, category) {
    const bodyContainer = $('<div class=\'scoreScreen\'></div>');

    bodyContainer.append('<div class=\'categoryLabel\'>' + category + '</div>');
    bodyContainer.append('<div class=\'scoreLabel\'>' + score + '</div>');
    bodyContainer.append(createReturnButton());
    bodyContainer.append(createShareButton());
    bodyContainer.append(createFooter());

    changeScreen(bodyContainer);
}

function createReturnButton() {
    const button = $('<button>Start Over</button>');

    button.click(function () {
        bodyContainer.fadeOut(500, function () {
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
            text: 'How good of a Tar Heel are ya?',
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