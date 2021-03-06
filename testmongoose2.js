var fs = require("fs");
global.schemas = {};
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/gretajs",
  { useNewUrlParser: true,
  useUnifiedTopology: true },
  function (err) {
    if (err) {
      throw err;
    } else console.log("Connected");
  }
); // chargement des schémas depuis le fichier de configuration JSON dans une variable
var database_schemas = JSON.parse(fs.readFileSync("database_schemas.json", "utf8")
); // Initialisation de chaque schéma par association entre le schéma et la collection
for (modelName in database_schemas) {
  global.schemas[modelName] = mongoose.model(
    modelName,
    database_schemas[modelName].schema,
    database_schemas[modelName].collection
  );
} /* On obtient un tableau de Models à partir des schémas accessible via  * la variable GLOBAL.schemas qui permettent d'exécuter des requêtes.*/
global.schemas["Countries"].find({ }, function (err, comms) {
  if (err) {throw err;}
  // comms est un tableau de hash
  console.log(comms);
  mongoose.connection.close();
});
