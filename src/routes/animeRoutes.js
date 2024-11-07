const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');

// --------------- CRUD(ROTAS) PARA OS ANIMES -------------------|

router.get ('/', (req, res) => {
    res.send('API Iniciada com sucesso!')
})

// CRIANDO A ROTA DE ANIMES
router.get('/animes', animeController.getAllAnimes )
// CRIANDO A ROTA DE VISUALIZAÇÃO PARA TODOS OS ANIMES
router.get('/animes/:id', animeController.getAnimeByID )
// CRIANDO A ROTA DE INSERÇÃO DE ANIMES
router.post('/animes', animeController.createAnime)
// CRIANDO A ROTA DE ATUALIZAÇÃO DE ANIMES
router.put('/animes', animeController.updateAnime)
// CRIANDO A ROTA DE DELETAR O ANIME
router.delete('/animes', animeController.deleteAnime)
//----------------------------------------------------------------|


module.exports = router;