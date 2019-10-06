var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/opera',(req,res,next)=>{
  res.render('test',{title:"Test Page", para:"Lorem ipsume paran for the testing of  my node website"})
})

module.exports = router;
