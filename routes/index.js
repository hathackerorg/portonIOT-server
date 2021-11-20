var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PortonIOT' });
});

/* POST metodo */
router.post('/', function(req, res) {
    return res.send('Recibido un metodo POST HTTP');
});

/* PUT metodo */
router.put('/', function(req, res) {
    return res.send('Recibido un metodo PUT HTTP');
});


/* DELETE metodo */
router.delete('/', function(req, res) {
    return res.send('Recibido un metodo DELETE HTTP');
});
module.exports = router;
