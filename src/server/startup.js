const path = require("path");
const koa = require("koa");
const bodyParser = require("koa-parser");
const serve = require("koa-static");
const mount = require("koa-mount");
const proxy = require("koa2-proxy-middleware");
const proxyConfig = require("./util/config").proxyConfig();

var app = new koa();
var env = process.env.NODE_ENV;

app.use(proxy(proxyConfig));
app.use(bodyParser());
app.use(mount("/scripts", serve(path.join(__dirname, "../../node_modules"))));
app.use(mount("/images", serve(path.join(__dirname, "../../dist/node_modules"))));

var isDeveloping = env.trim() == 'Local';
var staticPath;

if (isDeveloping) {
    staticPath = path.join(__dirname, "../../dist/index.html");
    app.use(serve(staticPath));
    let koawebpack = require("koa-webpack");
    let config = require("../../webpack.config.js")();
    koawebpack({
        config
    }).then((middleware) => {
        app.use(middleware);
    });
} else {
    staticPath = path.join(__dirname, "../../dist");
    app.use(serve(staticPath));
}

const port = isDeveloping ? 4321 : 80;

app.listen(port, "0.0.0.0", function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info("Listening on 0.0.0.0:" + port);
});