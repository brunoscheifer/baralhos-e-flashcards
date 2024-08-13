let { flashcards } = require('../data')

function findFlashcardIndexById(id) {   
    return flashcards.find(flashcard => flashcard.id === id)

}

module.exports = findFlashcardIndexById