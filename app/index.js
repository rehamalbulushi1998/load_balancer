const app = require("express")();
const appid = process.env.APPID;

app.get("/", (req,res) => 
res.send(`this is the home page appid: ${appid} `))


app.listen(appid, ()=>console.log(`${appid} is listening on ${appid}`))