var mongoose = require("mongoose");
var local_passport_mongo = require("passport-local-mongoose");

var auth_schema = new mongoose.Schema({
  username : String,
  password : String
});

auth_schema.plugin(local_passport_mongo);

module.exports = mongoose.model("user", auth_schema);


