const prompt = require('prompt-sync')();
const criarBaralho = require('./baralhos/criarBaralho')
const atualizarBaralho = require('./baralhos/atualizarBaralho')
const deletarBaralho = require('./baralhos/deletarBaralho')
const listarBaralhos = require('./baralhos/listarBaralhos')
const atualizarFlashcard = require('./flashcards/atualizarFlashcard')
const buscarFlashcardsPorBaralho = require('./flashcards/buscarFlashcardsPorBaralho')
const buscarFlashcardsPorPergunta = require('./flashcards/buscarFlashcardsPorPergunta')
const criarFlashcard = require('./flashcards/criarFlashcard')
const deletarFlashcard = require('./flashcards/deletarFlashcard')
const findFlashcardIndexById = require('./flashcards/findFlashcardIndexById')
const listarFlashcards = require('./flashcards/listarFlashcards')
const listarFlashcardsPorBaralhoId = require('./flashcards/listarFlashcardsPorBaralhoId')

exibirMenu()
function exibirMenu() {
    console.log(`
    1. Criar Baralho
    2. Criar Flashcard
    3. Listar Baralhos
    4. Listar Flashcards
    5. Listar Flashcards por Baralho
    6. Atualizar Baralho
    7. Atualizar Flashcard
    8. Deletar Baralho
    9. Deletar Flashcard
    10. Buscar Flashcards por Pergunta
    11. Buscar Flashcards por Baralho
    0. Sair
    `)

let opcao = prompt('Oque voçê quer fazer?: ')

switch(opcao) {
    case '1':
        let titulo = prompt('Qual o novo titulo?: ')

        criarBaralho({ titulo })
        console.log('Baralho adicionado!!')
        
        exibirMenu()
        break;
    case '2':
        let pergunta = prompt('Qual a pergunta?: ')
        let resposta = prompt('Qual a resposta da pergunta?: ')
        let idBaralho = prompt('Qual o id do baralho que sera adicionado o flashcard?: ')

        criarFlashcard({ pergunta, resposta, idBaralho })
        console.log('Flahcard adicionado!!')

        exibirMenu()
        break;
    case '3':
        
        listarBaralhos()
        exibirMenu()

        break;
    case '4':

        listarFlashcards()
        exibirMenu()
        
        break;
    case '5':
        break;
    case '6':
        break;
    case '7':
        break;
    case '8':
        break;
    case '9':
        break;
    case '10':
        break;
    case '11':
        break;
    case '0':
        break;
    default:
        console.log('Numero Invalido!')
        exibirMenu()
    }
}