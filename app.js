import  express  from "express";
import bodyParser from "body-parser";

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();
  if(currentDay === 6 || currentDay === 0){
    res.send("Yay! It's the weekend!");
  }
  else{
    res.send("Boo! I have to work!");
  }
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});