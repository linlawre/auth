var mongoose = require("mongoose");
var local_passport_mongo = require("passport-local-mongoose");

var blog_schema = new mongoose.Schema({
  title:String,
  URL: {type : String, default: "https://akm-img-a-in.tosshub.com/sites/indiacontent/0/media/images/frontend/image-not-found.png"},
  content: String, 
  created: {type : Date, default: Date.now}
});

blog_schema.plugin(local_passport_mongo);

module.exports = mongoose.model("blog", blog_schema);


