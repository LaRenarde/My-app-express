var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

/* GET users from _id. */
router.route('/:_id').get(function (req, res) {
    // console.log('req.originalUrl : ', req.originalUrl);
    var path = "/" + req.originalUrl.split('/')[1];
    var type = req.method;


    global.schemas[actions_json[type+path].modelName].find({}, function (err, result) {
            if (err) {
                throw err;
            }
            // console.log('formUser: ', result);
            res.render('formUser', {
                title: "Form user\'s datas",
                libelle: "modification",
                form_action: actions_json[type + path].form_action,
                user: result[0] // il n'y a qu'une réponse possible puisque requête via _id user
            });
        });
});
module.exports = router;