const express= require('express');
const app = express();
//const routes = require('./routes/route')

/*routes.get('/servidor',(req, res)=>{
    res.send('Bienvendios a mi servidor');
})
/*routes.post('/aplicacion',(req, res)=>{
    res.send('Bienvendios a mi aplicacion');
})*/

app.use(express.json())
app.use('/users',require('./routes/route'))


app.listen(3000, (req, res)=>{
    console.log("HELLO WORLD..")
})
module.exports = app;