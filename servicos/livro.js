const fs = require('fs')
const path = require('path')

const caminhoArquivo = path.join(__dirname, 'livros.json');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))

}

function getLivrosPorID(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id) [0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    
    const novaListaLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))

}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id !== id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))}

function deleteLivro(id) {
    const livros = getTodosLivros()
    const novosLivros = livros.filter(livro => livro.id === id)
    fs.writeFileSync(caminhoArquivo, JSON.stringify(novosLivros, null, 2))
}
module.exports = {
    getTodosLivros,
    getLivrosPorID,
    insereLivro,
    modificaLivro,
    deleteLivro
};