var express = require('express')
  , http = require('http')
  , path = require('path')
  , logger = require('morgan')
  , router = require('./routes/index.js');

var app = express();

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger());
app.use('/', router);

//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}
http.createServer(app).listen(app.get('port'),function (){});
