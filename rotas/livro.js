const { Router } = require('express');
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro")

const router = Router()

router.get('/', (req, res) => {
    res.send("Você fez uma requisição GET")
})

router.post('/', (req, res) => {
    res.send("Você fez uma requisição POST")
})

router.patch('/:id', patchLivro)

router.delete(':id', deleteLivro)



module.exports = router