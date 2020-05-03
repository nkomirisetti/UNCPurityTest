function openCategoryScreen() {
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
                openTestScreen(category);
            });
        });

        div.append(button);
    });

    return div;
}