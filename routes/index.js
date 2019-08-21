var express = require('express');
var router = express.Router();
var axios = require('axios');
var main=require('../app')
const stringify = require('json-stringify-safe')
/* GET home page. */
router.get('/write', function(req, res, next) {
  
axios.get('https://jsonplaceholder.typicode.com/posts').then(
  result=>{


  var output = result.data.map(function(obj) {
    return Object.keys(obj).sort().map(function(key) { 
      return obj[key];
    });
  });

var sqlQuery="Insert into posts(body,id,title,userId) values ? "
   
      main.connection.query(sqlQuery,[output], function (error, results, fields) {

        if (error){
            var outputJson={
              status:402,
              success:results,
              message: 'Duplicate entry '
            } 
           
          
        }else{
          var outputJson={
            status:200,
            success:results
          }
        }
        
        res.send(outputJson);
      });

  

    
  
  }
).catch(e =>
{  
console.log(e)

})


});

router.get('/read', function(req, res, next) {
  main.connection.query("SELECT * FROM posts WHERE userId != (2)",function(error,result){
      if(error){
        var outputJson={
          status:402,
          message: 'not found'
        } 
      }else{
        var outputJson={
          status:200,
          data:result
        }
      }
      res.status(200).send(outputJson);
  })
  
});
  

module.exports = router;
