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
        let idBaralho = parseInt(prompt('Qual o id do baralho que sera adicionado o flashcard?: '))

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
        let id = parseInt(prompt('Qual o id do baralho para mostrar seus flashcards?: '))

        listarFlashcardsPorBaralhoId(id)

        exibirMenu()
        break;
    case '6':
        listarBaralhos()

        let idAtualizar = parseInt(prompt('Qual o id do baralho que deseja atualizar?: '))

        let novoTitulo = prompt('Qual o novo titulo');

        atualizarBaralho(idAtualizar, {titulo: novoTitulo})
        console.log('Atualizado!!')

        exibirMenu()
        break;
    case '7':
        listarFlashcards()

        let idAtualizar2 = parseInt(prompt('Qual o id do flashcard que deseja atualizar?: '))

        let novaPegunta = prompt('Qual a nova pergunta?: ')
        let novaResposta = prompt('Qual a nova resposta?: ')
        let novoBaralho = parseInt(prompt('Qual onovo baralho: '))

        atualizarFlashcard(idAtualizar2, {pergunta: novaPegunta, resposta: novaResposta, idBaralho: novoBaralho})
        console.log('Atualizado!')

        exibirMenu()
        break;
    case '8':
        listarBaralhos()

        let idRemover = parseInt(prompt('Qual baralho deseja deletar?: '))

        deletarBaralho(idRemover)
        console.log('Removido!!')

        exibirMenu()
        break;
    case '9':
        listarFlashcards()

        let idRemover2 = parseInt(prompt('Qual flashcard deseja deletar?: '))

        deletarFlashcard(idRemover2)
        console.log('Removido!!')

        exibirMenu()
        break;
    case '10':
        let buscar = parseInt(prompt('Qual o baralho que tem os flashcards que voçê quer?: '))

        buscarFlashcardsPorBaralho(buscar)

        exibirMenu()
        break;
    case '11':
        let buscar2 = prompt('Qual pergunta que voçê quer achar?: ')

        buscarFlashcardsPorPergunta(buscar2)

        exibirMenu()
        break;
    case '0':
        break;
    default:
        console.log('Numero Invalido!')
        exibirMenu()
    }
}