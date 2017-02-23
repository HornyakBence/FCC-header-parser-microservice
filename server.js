const express    = require('express');
const app        = express();
const port = 8080;
const router = express.Router();


router.get('/', function(req, res){
 console.log(req);
 var osText = req.headers['user-agent'];
 var langText = req.headers['accept-language'];
 var ip = req.headers['x-forwarded-for'];
 
 res.json( { 
  message: 'yaay',
  OS: osText,
  language: langText,
  ip: ip
 } );
 
});

// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(port);