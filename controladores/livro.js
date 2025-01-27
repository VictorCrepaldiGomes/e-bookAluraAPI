const fs = require("fs");
const { getTodosLivros, getLivrosPorID, insereLivro, modificaLivro, deleteLivro } = require("../servicos/livro");

const getLivros = (req, res) => {
    
    const livros = getTodosLivros()
    res.send(livros);
};

const getLivro = (req, res) => {
    
    const id = req.params.id

    if (id && Number(id)) {
        const livro = getLivrosPorID(id)
        res.send(livro)

    } else {
        
        res.status(422)
        res.send("ID inválido")
    }
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

function patchLivro (req, res)  {
    try {
        const id = req.params.id;

        if(id && Number(id)) {

            const body = req.body;
            modificaLivro(body, id);
            res.send("modificado com sucesso");

        } else {

            res.status(422)
            res.send("ID inválido")

        }
        
    } catch (error) {
        res.status(500).send(error.message);
    }
};

function deleteLivroController(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteLivro(id)
            res.send("Livro apagado com sucesso")

        } else {

            res.status(422)
            res.send("ID inválido")
        }
        

    } catch(error) {
        res.status(500).send(error.message)
    }

}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro: deleteLivroController,
    deleteLivroController
};