const express = require('express');
const loginController = require('../controllers/combinaisons')
const { checkScore } = require ('../middlewares/checkScore');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hellooo');
});

router.get('/af_scores', checkScore, loginController.getCombinaisons);

module.exports = router;