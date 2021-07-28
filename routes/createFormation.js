var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

/* Insert one new user into database. */
router.route("/").get(function (req, res) {
  // console.log('req.originalUrl : ', req.originalUrl);
  var path = "/" + req.originalUrl.split("/")[1];
  var type = req.method;

  /* Insert one new user into database. */
  console.log("req.originalUrl : ", req.originalUrl);
  // On doit créer via mongoose un _id pour faire l'insertion dans la base
  if (!req.query.hasOwnProperty("_id")) req.query._id = new ObjectId(); // req.query car c'est un get. **  req.body si c'est une méthode post
  GLOBAL.schemas["Formations"].create(
    [req.query],
    function (err, result) {
      if (err) {
        throw err;
      }
      console.log("createFormation: ", result);
      res.render("modifyFormation", {
        title: "Creating User without error with datas below :",
        user: result[0]._doc,
      });
    } // fin callback de l'insert
  ); // fin de l'insert()
}); // fin de la gestion de la route
module.exports = router;
module.exports = router;
