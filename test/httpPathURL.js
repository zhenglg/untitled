/**
 * Created by Administrator on 2016/5/7.
 */

var http = require("http");
var url = require("url");
var querystring = require("querystring");
/**
 * 测试 url http://localhost:8888/testPath?name=zlg
 *
 * 测试打印结果:
 *
 * 请求的相对路径 /testPath received.
   请求的参数 [object Object] received.
   请求的参数 name的值  方法1：zlg
   请求的参数 name的值  方法2：zlg
   请求的相对路径 /favicon.ico received.
   请求的参数 [object Object] received.
   请求的参数 name的值  方法1：undefined
 */
function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var query = url.parse(request.url,true).query;
        console.log("请求的相对路径 " + pathname + " received.");
        console.log("请求的参数 " + query + " received.");
        console.log("请求的参数 name的值  方法1：" + query.name);

        var queryStr = url.parse(request.url).query;

        var requestName = querystring.parse(queryStr)["name"];
        console.log("请求的参数 name的值  方法2：" + requestName);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");


    



}

exports.httpPathURL = start;