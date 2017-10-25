let express = require('express');
const distDir = __dirname + "\\dist\\";


let app = express();
require('./config/config')(app);
require('./endpoints/routes')(app);

app.use(express.static(distDir));

app.get("/",(req,res)=>{

    return res.sendFile("./dist/index.html")
})

app.listen(app.get('port'), () => {
    console.log(`Servidor express escuchado en el puerto ${app.get('port')}`, distDir);
});
  
