function openScoreScreen(score, category) {
    const bodyContainer = $('<div class=\'scoreScreen\'></div>');

    bodyContainer.append(createResultsContainer(category, score));
    bodyContainer.append(createReturnButton());
    bodyContainer.append(createShareButton());
    bodyContainer.append(createFooter());
    bodyContainer.append(createFeedbackContainer());
    changeScreen(bodyContainer);
    animateScore()
}

function createResultsContainer(category, score) {
    const div = $('<div></div>');

    div.append('<div class=\'pageTitle\'>' + category + '</div>');
    div.append(createScoreDiv(score));

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
    const div = $('<div class=\'feedbackDiv\'></div>');
    const inputBox = $('<textarea rows="3" placeholder="Ideas for questions or categories? Let me know! If you include your @ I can give you a shout-out on the page"></textarea>');
    const button = $('<button>Send!</button>');
    button.click(function () {
        if ($.trim(inputBox.val()) == '') {
            alert('Make sure you leave some actual feedback🙄');
        } else {
            const output = inputBox.val().replace(/[^a-zA-Z ]/g, "");
            div.empty();
            div.removeClass('feedbackDiv');
            div.addClass('feedbackSubmitted');
            div.text('Sending...');
            console.log(output);
            $.post('https://feedback-unc-purity.herokuapp.com/feedback?feedback=' + output, function (returnedData) {
                div.text('Sent! Thanks!');
            });
        }
    });

    div.append(inputBox);
    div.append(button);

    return div;
}

function createScoreDiv(score) {
    return `
    <div class="ml8">
        <span class="letters-container">
            <span class="letters letters-left">${score}</span>
            <span class="letters bang">!</span>
        </span>
        <span class="circle circle-dark"></span>
        <span class="circle circle-container"><span class="circle circle-dark-dashed"></span></span>
  </div>`
}

function animateScore() {
    anime.timeline()
        .add({
            targets: '.ml8 .circle-container',
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: '-=1000'
        }).add({
            targets: '.ml8 .circle-dark',
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
            offset: '-=600'
        }).add({
            targets: '.ml8 .letters-left',
            scale: [0, 1],
            duration: 1200,
            offset: '-=550'
        }).add({
            targets: '.ml8 .bang',
            scale: [0, 1],
            rotateZ: [45, 15],
            duration: 1200,
            offset: '-=1000'
        });

    anime({
        targets: '.ml8 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
    });

}