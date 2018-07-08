const express = require('express');
const app = express();

let todoRoutes = require('./routes/todos');


app.get("/", (req,res) => {
  res.send("Hello There :)")
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
})
