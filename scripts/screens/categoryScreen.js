function openCategoryScreen() {
    const bodyContainer = $('<div class=\'bodyContainer\'></div>');
    bodyContainer.append('<div class=\'pageTitle\'>UNC Purity Test</div>');

    bodyContainer.append(createCategoriesComponent());
    bodyContainer.append(createFooter());

    changeScreen(bodyContainer);
}

function createCategoriesComponent() {
    const div = $('<div class=\'categoriesList\'></div>');

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

function animateTitle() {
    var textWrapper = document.querySelector('.pageTitle');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline().add({
        targets: '.pageTitle .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
    });

}