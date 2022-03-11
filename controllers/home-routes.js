const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
    console.log('Workikng')
    res.render('login');
});

module.exports = router;