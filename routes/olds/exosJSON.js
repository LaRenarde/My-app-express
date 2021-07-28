var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    var path = "/" + req.originalUrl.split('/')[1];
    var type = req.method;
    global.db.collection(actions_json[type + path].collection).find().toArray(function (err, result) {
        if (err) {
            throw err;
        }
        // console.log(result);
        if (actions_json[type+path].return-type == null) {
            res.render(actions_json[type + path].view, {
                stitle: 'First Cnx Mongo',
                title: 'Liste déroulante',
                exos: result
            });
        } else {
            res.setHeader('content-type', 'application/json');
            res.send(result);
        }
    });
});
module.exports = router;