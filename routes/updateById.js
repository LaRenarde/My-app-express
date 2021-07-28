var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

/* SET user from _id with new data for an update into mongoDB . */
router.route('/:_id').get(function (req, res) {
    var path = "/" + req.originalUrl.split ('/')[1];
    var type = req.method;
    global.schemas[actions_json[type+path].modelName].update({ _id: new ObjectId(req.params._id) }, { $set: req.query },
        function (err, result) {
            if (err) { throw err; }
            console.log('modifyUser: ', result);
            global.schemas[actions_json[type+path].modelName].find({_id: new ObjectId(req.params._id)}), function (err, result) {
                
                if (err) { throw err; }
                console.log('users: ', result);
                    res.render(global.actions_json[type + path].view, {
                        title: "List of " + model,
                        data: result[0]
                    });
                };
            }); // fin du find() après update
        // fin callback de l'update
     // fin de l'update()
}); // fin de la gestion de la route



module.exports = router;