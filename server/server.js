import http from 'http';
import express from 'express';
import cors from 'cors';
import webpack from 'webpack';
import webpackConfig from './../webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware';
const compiler = webpack(webpackConfig);
import webpackHotMiddleware from "webpack-hot-middleware";

import  socketIO from 'socket.io'

let app = express();
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    inline:true
}));
app.use(webpackHotMiddleware(compiler, {
    'log': false,
    'path': '/__webpack_hmr',
    'heartbeat': 10 * 1000
}));

app.use(cors());
const server = http.createServer(app);
const io = socketIO(server);



io.on('connection',(connection)=>{
    let supportAvailable = false;
    setInterval(()=>{
        supportAvailable = !supportAvailable;
        connection.emit(supportAvailable ? `SUPPORT_AVAILABLE` : `SUPPORT_NOT_AVAILABLE`);
    },10000);
});

app.use(express.static('public'));
app.use(express.static('public/css'));
const port = process.env.PORT || 8080;
server.listen(port,()=>{
    console.info(`Redux Server is listening on port ${port}.`);
});