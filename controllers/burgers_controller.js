const express =require('express');
const router = express.Router();
const burger = require('../models/burger.js');
//route controller
router.get("/", function (req, res) {
    burger.getAll(function(data){
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});
//maybe comeback to change the burger api routes
router.post("/api/burgers", function(req,res){
    burger.create(["burger_name","devoured"], [req.body.burger_name, req.body.devoured], function(result){
        //send back ID of the new qoute
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if(result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result){
        if(result.affectedRows == 0){
            //if no rows changed, then the ID does not exist, so 404
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

module.exports = router;