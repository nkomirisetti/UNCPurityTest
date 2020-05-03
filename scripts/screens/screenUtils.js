function createFooter() {
    return $('<div class=\'footerContainer\'>Made with 💙 by Nikhil Komirisetti</div>');
}

function changeScreen(div) {
    rootContainer.empty();
    rootContainer.append(div);
    rootContainer.fadeOut(0).fadeIn(500);
}