const fs = require("fs");
const { getTodosLivros, getLivrosPorID, insereLivro } = require("../servicos/livro");

const getLivros = (req, res) => {
    
    const livros = getTodosLivros()
    res.send(livros);
};

const getLivro = (req, res) => {
    
    const id = req.params.id
    const livro = getLivrosPorID(id)
    res.send(livro);
};

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro (livroNovo)
        res.send("Livro inserido")
        res.status(201)

    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}
module.exports = {
    getLivros,
    getLivro,
    postLivro
};