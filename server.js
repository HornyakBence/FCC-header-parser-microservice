const express    = require('express');
const app        = express();
const port = process.env.PORT || 8080;
const router = express.Router();


router.get('/', function(req, res){
 const osText = req.headers['user-agent'];
 var langText = req.headers['accept-language'];
 const ip = req.headers['x-forwarded-for'];
 
 var os = getTextBetween(osText, '(', ')');
 
 var lang = langText.split(',')[0];
 
 res.json( { 
  OS: os, 
  language: lang,
  ip: ip
 } );
 
});

function getTextBetween(text, char1, char2) {
 var result = '';
 var flag = false;
 
 for (var i = 0; i<text.length; i++) {
  if (text[i-1] === char1) {
   flag = true;
  }
  
  if (flag) {
   if (text[i] === char2) {
    break;
   } else {
   result+=text[i];
   }
  }
 }

 return result;
}

// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(port);