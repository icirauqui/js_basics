var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.init;
handle["/init"] = requestHandlers.init;
handle["/ls"] = requestHandlers.ls;
handle["/start"] = requestHandlers.init;
handle["/upload"] = requestHandlers.upload;

server.init(router.route, handle);