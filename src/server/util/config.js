var config = require("config");

function proxyConfig(){
    return config.get("proxy");
}


module.exports ={
    proxyConfig
};