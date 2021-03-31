const mongoose = require("mongoose")

module.exports = function connectDB(){
  mongoose.connect("mongodb://localhost:27017/auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to db")
  }).catch((err) => {
    console.log(err)
  })
}
