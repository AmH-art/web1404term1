import {use, start, write} from "./06a-httpFramework.js";
import {readFile, writeFile} from "fs";

use("index.html", function(request, response){
    response.write(`
        <html>
            <head>
                <title>hello!</title>
            </head>
            <body>
                <b>Hello!</b>
                <img src='http://127.0.0.1/ch7/param'>
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
           
            write(response, 404, message);    
        }
        else{
            
            write(response, 200, fileBody);            
        }
    })
});

use("hello", function(request, response){
    let urlArray = request.url.split('/');
    let inputs = urlArray.slice(2);
  
    write(response, 200, 'hello ' + inputs[0]);     
})

use("sum", function(request, response){
    let urlArray = request.url.split('/');
    let inputs = urlArray.slice(2);
    write(response, 200, 'sum: ' + (parseInt(inputs[0])+parseInt(inputs[1])));      
});

use("createFile", function(request, response){
    let urlArray = request.url.split('/');
    let inputs = urlArray.slice(2);
    let body = inputs[1] || '';

    writeFile('./'+inputs[0], body, function(err){
        if(err){
            let message = 'createFile error:' + error;
            console.log(message);
            write(response, 500, message);    
        }
        else{
            write(response, 200, 'createFile ok');
        }
    })
});

use("postTest", function(request, response){
    console.log('body: ', typeof request.body, request.body)
});

use("signup", function(request, response){
    readFile('./users.json', {encoding: 'utf8'}, function(err, fileBody){
        if(err){
            if(err.code === 'ENOENT'){
                let msg = 'read error: File not found';
                console.log(msg);
                write(response, 500, msg); 
            }
            else{
                let msg = 'read error:'+ err;
                console.log(msg);
                write(response, 500, msg);
            }
        }
        else{
            fileBody = JSON.parse(fileBody);
            fileBody.records.push(request.body);
            fileBody = JSON.stringify(fileBody);

            writeFile('./users.json', fileBody, function(err){
                if(err){
                    let msg = 'writeFile error:' + err;
                    console.log(msg);
                    write(response, 500, msg);
                }
                else{
                    console.log('signup done.');
                    write(response, 200, 'signup done.');
                }
            });
        }
    });
});

use("login", function(request, response){
    readFile('./users.json', {encoding: 'utf8'}, function(err, fileBody){
        if(err){
            if(err.code === 'ENOENT'){
                let msg = 'read error: File not found';
                console.log(msg);
                write(response, 500, msg); 
            }
            else{
                let msg = 'read error:'+ err;
                console.log(msg);
                write(response, 500, msg);
            }
        }
        else{
            fileBody = JSON.parse(fileBody);
            let found = false;
            for(let i=0; i<fileBody.records.length; i++){
                if(fileBody.records[i].user === request.body.user && fileBody.records[i].pass === request.body.pass){
                    found = true;
                    break;
                }
            }

            if(found){
                write(response, 200, 'login done.');
            }
            else{
                write(response, 404, 'login failed.');
            }
        }
    });
});

start();

