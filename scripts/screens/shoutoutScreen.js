function openShoutoutScreen() {
    const bodyContainer = $('<div class=\'bodyContainer\'></div>');
    const button = $('<button>Go Back</button>');

    button.click(function () {
        rootContainer.fadeOut(500, function () {
            openCategoryScreen();
        });
    });

    bodyContainer.append('<div class=\'pageTitle\'>Shoutouts!</div>');
    bodyContainer.append(createShoutoutsDiv());
    bodyContainer.append(button);
    changeScreen(bodyContainer);
}

function createShoutoutsDiv() {
    const div = $('<ul class=\'shoutoutsContainer\'></ul>');
    const peeps = ['@nikhilkomirisetti'];
    peeps.forEach(peep => {
        div.append('<li class=\'social\'>' + peep + '</li>');
    });

    return div;
}