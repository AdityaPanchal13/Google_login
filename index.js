const express = require("express")
const cors = require("cors")
const connectDB = require("./config/database");
const Router = require("./config/routes");

const app = express()
const port = 5000;
app.use(cors())
app.use(express.json())
app.use("/", Router)
connectDB()

app.get("/", function(req, res){
  res.send("welcome")
})



app.listen(port, () => {
  console.log(`server running on the port ${port}`)
})