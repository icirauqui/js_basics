var http = require("http");
var url = require("url");


function say(word) {
    console.log(word);
}

function init(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request received for " + pathname + ".");

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });

        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });

        //route(handle, pathname, response);

        //response.writeHead(200, {"Content-Type": "text/html"});
        //response.write("Hello World\n");
        //response.write(content);
        //response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.init = init;