import {use, start, write} from "./05b-httpFramework.js";
import {readFile, writeFile} from "fs";

use("index.html", function(request, response){
    response.write(`
        <html>
            <head>
                <title>hello!</title>
            </head>
            <body>
                <b>Hello!</b>
                <img src='http://127.0.0.1/file/x.jpg'>
            </body>
        </html>
    `);
    response.end();
});


use("file", function(request, response){
    let urlArray = request.url.split('/');
    let fileName = urlArray[2];

    readFile(fileName, function(error, fileBody){
        if(error){
            let message = 'file server error:' + error;
            console.log(message);
            // response.writeHead(404);
            // response.write(message);
            // response.end();
            write(response, 404, message);    
        }
        else{
            // response.writeHead(200);
            // response.write(fileBody);
            // response.end();
            write(response, 200, fileBody);            
        }
    })
});

start();

