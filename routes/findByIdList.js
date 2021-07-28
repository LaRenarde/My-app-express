var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

/*Composant générique findByIdList pour lire un enregistrement via son Id mongodb*/

/* GET data from Id into url */
router.route('/:_id').get(function (req, res) {
  var path = "/" + req.originalUrl.split('/')[1];
  var type = req.method;
  
  global.schemas[actions_json[type+path].modelName].find({_id: new ObjectId(req.params._id)},
    function (err, result) {
        if (err) { throw err; }
        console.log("data from findByIdList : ",result);

        global.schemas[actions_json[type+path].modelList].find({}, function(err,list){
            res.render(actions_json[type + path].view, {
                title: 'Form datas',
                libelle: "Modification",
                form_action: actions_json[type + path].form_action,
                data: result[0],
                liste: list
            });
        })

      }
    );
});
module.exports = router;