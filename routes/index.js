var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let nombre = "Angel Gabriel"
    let apellido = "Vegas Moreno"
  let cedula = "23.951.923"
   let seccion = "1"
  res.render('index', {
    title: 'UNERG',
    name: nombre,
      apellido,
    cedula,
   seccion,
  });
});

router.get('/otro', function(req, res, next) {
  let nombre = "Vegas"
  let cedula = "23.951.923"
  
  res.render('index', {
    title: 'UNERG',
    name: nombre,
    cedula,
  });
});

module.exports = router;
