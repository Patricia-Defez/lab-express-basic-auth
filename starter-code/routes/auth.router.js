const express = require('express');
const router  = express.Router();
const authRouter = require('../controllers/auth.controller');
const secure = require('../middlewares/secure.mid');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/register', authRouter.register);
router.post('/register', authRouter.doRegister);

module.exports = router;
