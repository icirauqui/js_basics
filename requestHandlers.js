var exec = require("child_process").exec;
var querystring = require("querystring");

function ls(response, postData) {
    console.log("Request handler 'ls' called");

    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }

    //sleep(10000);

    exec("ls -lah", 
        function (error, stdout, stderr) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(stdout);
            response.end();
        }
    );
}

function init(response, postData) {
    console.log("Request handler 'init' called");

    var body =  '<html>' +
                  '<head>' +
                    '<meta http‐equiv="Content‐Type" content="text/html; charset=UTF‐8" />'+
                  '</head>'+
                  '<body>'+
                    '<form action="/subir" method="post">'+
                      '<textarea name="text" rows="20" cols="60"></textarea>'+
                      '<input type="submit" value="Enviar texto" />'+
                    '</form>'+
                  '</body>'+
                '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
} 

function upload(response, postData) {
    console.log("Request handler 'upload' called");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("You uploaded " + querystring.parse(postData).text);
    response.write("You uploaded " + querystring.parse(postData)["text"]);
    response.end();
}

exports.ls = ls;
exports.init = init;
exports.upload = upload;