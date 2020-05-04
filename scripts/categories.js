const CATEGORIES = ['General UNC Test', 'More tests coming soon...'];

function getQuestions(category) {
    switch (category) {
        case 'More tests coming soon...':
            return toBeAnnounced;
        case 'General UNC Test':
            return generalUNCQuestions;
    }
}