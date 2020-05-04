function createFooter() {
    return $('<div class=\'footerContainer\'>Made with 💙 by <a href="https://komirisetti.com">Nikhil Komirisetti</a></div>');
}

function changeScreen(div) {
    rootContainer.empty();
    rootContainer.append(div);
    rootContainer.fadeOut(0).fadeIn(500);
}