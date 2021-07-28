var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

/* SET user from _id with new data for an update into mongoDB . */
router.route('/:_id').post(function (req, res) {
    console.log('req.originalUrl : ', req.originalUrl);
    global.schemas["Users"].updateOne({ _id: new ObjectId(req.params._id) }, { $set: req.body },
        function (err, result) {
            if (err) { throw err; }
            console.log('modifyUser: ', result);
            global.schemas["Users"].find({
                _id: new ObjectId(req.params._id)
            }, function (err, result) {
                if (err) { throw err; }
                console.log('users: ', result);
                res.render('modifyUser', {
                    title: 'User modified without error',
                    data: result[0]
                });
            }); // fin du find() après update
        } // fin callback de l'update
    ); // fin de l'update()
}); // fin de la gestion de la route



module.exports = router;