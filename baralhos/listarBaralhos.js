let { baralhos } = require('../data')

function listarBaralhos() {
    baralhos.forEach(baralho => {

        console.log(`
        ID: ${baralho.id}
        titulo: ${baralho.titulo}
        `)
    }
)}

module.exports = listarBaralhos