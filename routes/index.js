var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/json', function(req, res, next) {
  res.send('routing with nodemon restart 2');
});

router.post('/login:-user:-pass', function(req, res, next) {

  console.log('doing a login');

  var user = req.params(user);
  var pass = req.param(pass);                         

  checkCreds(user, pass, callbackForLogin);

  res.send('Logged in');
});

function callbackForLogin(status){
  if(status==='success'){
    res.send('Logged in check');
  }else{
    res.send('Not a user/incorrect creds');
  }

}

function checkCreds(user, pass, callback){


  callback('success');
}

module.exports = router;
