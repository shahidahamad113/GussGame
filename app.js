const express=require("express");
const bodyParser = require('body-parser');
const app=express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/view');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  
app.listen(3000,()=>{
    console.log('server has just started');
});
app.get('/',(req,res)=>{
    res.render('colorGame');
})