let express = require('express');
let app = express();

let webRoutes = require('./routes/web');

let appConfig = require('./configs/app');

let bodyParser = require('body-parser');

app.use('/', webRoutes);
app.use(bodyParser.urlencoded({ extended: true}));

let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';
let hbs = exphbs.create({extname: extNameHbs});
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.listen(appConfig.express_port, function(){
    console.log('The app is running on port ' + appConfig.express_port)
});