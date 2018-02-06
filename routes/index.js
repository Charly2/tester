/**
 * Created by Charly on 10/03/2017.
 */
var express = require('express');
var router = express.Router();

var productoModel = require("../models/producto");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/buenos', function(req, res, next) {
  productoModel.saveBien(req.body,function (error,data) {
    if(!error){
      console.log("Guardada")
      res.status(200).json({'status':true});

    }else{
      console.log("No Guardada")
      res.status(200).json({'status':false});
    }
  });
});

router.post('/malos', function(req, res, next) {
  productoModel.saveMal(req.body,function (error,data) {
    if(!error){

      console.log("Guardada")
      res.status(200).json({'status':true});
    }else{
      console.log("No Guardada")
      res.status(200).json({'status':false});
    }
  });
});

router.get('/:id', function(req, res, next) {

  productoModel.findById(req.params.id,function (error,data) {


    res.status(202).json(data);


//res.render('index', data);
  });

});


module.exports = router;
