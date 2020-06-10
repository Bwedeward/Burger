var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var hbsObject = {
          burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
})

router.post("/api/burger", function(req, res){
    burger.insertOne([
        "burger_name"
    ], [
        req.body.name
    ], function(result) {
        res.json(result)
    })
})

router.put("/api/burger/:id", function(req, res){
    var condition = `id =  ${req.params.id}`
    burger.updateOne({
        devoured: true
    }, condition, function(result){
        res.json(result)
    })
})
module.exports = router;