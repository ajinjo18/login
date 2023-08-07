var express = require('express');
var router = express.Router();

let username1='ajin';
let password1= "123";

     

router.post('/', function (req,res){
    let{name,password}=req.body;

    if((name==username1 && password==password1))
{        

  req.session.user = name;
        res.redirect('/users')
    }
    else{res.render('index',{isAlert:true})}
   

});

router.get('/', (req, res)=> {
  if(req.session.user) {
    res.render('users',{username1})
  } else res.redirect('/')
})


module.exports = router;


