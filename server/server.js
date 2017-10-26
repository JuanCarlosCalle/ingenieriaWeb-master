let express = require('express');
const distDir = __dirname + "\\dist\\";
var path = require('path');

let app = express();
require('./config/config')(app);
let routes = require('./endpoints/routes')(app);
// view engine setup

app.set('views', path.join(__dirname, 'dist/'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(distDir));

app.listen(app.get('port'), () => {
    console.log(`Servidor express escuchado en el puerto ${app.get('port')}`, distDir);
});
  
