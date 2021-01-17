const express = require('express');     // importation du paquet express
const router = express.Router();        // création du router

const userCtrl = require('../controllers/user')     // importation du controller user

const verifyPassword = require('../middleware/verify-password');        // importation du middleware

router.post('/signup', verifyPassword, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;        // on export le router du fichier