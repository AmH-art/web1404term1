let fs = require('fs');
let inputs = process.argv.slice(3);
let command = process.argv[2];

console.log("command is:", command);
console.log("inputs are:", inputs);
console.log("------------------------");

function router(){
    let found = false;
    for(key in controllers){
        if(controllers[key].command === command){
            controllers[key].func(inputs);
            found = true;
        }
    }
    if(! found){
        console.log('command not found.')
    }
}
let controllers = [
    {
        command: "sum",
        func: function(x){
            console.log(Number(x[0]) + Number(x[1]));
        },
    },
    {
        command: "minus",
        func: function(x){
            console.log(Number(inputs[0]) - Number(inputs[1]));
        }
    }
];

router();

// if(command == "sum"){
//     console.log(Number(inputs[0]) + Number(inputs[1]));
// }
// else if(command == "minus"){
//     console.log(Number(inputs[0]) - Number(inputs[1]));
// }
// else if(command == "print"){
//     let obj = {
//         name: inputs[0],
//         family: inputs[1],
//         age: inputs[2]
//     }
 
//     // let obj = {};
//     // obj['name'] = inputs[0];
//     // obj['family'] = inputs[1];
//     // obj['age'] = inputs[2];

//     console.log("your object is:", obj);

// }
// else if(command == "print2"){
//     let obj = {
//         name: inputs[0],
//         family: inputs[1],
//         age: inputs[2]
//     }
 
//     for(let key in obj){
//         console.log('salam:', obj[key]);
//     }
// }
// else if(command == "print3"){
//     let text = 'salam';
//     xxx(text);
// }
// else if(command == "print4"){
//     let text = 'salam';
//     console.log(yyy(text));
// }
// else if(command === 'write'){
//     let body = yyy('salam');

//     console.log('a', typeof body, body);
//     body = JSON.stringify(body);
//     console.log('b', typeof body, body);

//     console.log(1);
//     fs.writeFile('./data.txt', body, function(err){
//         console.log(2, err);
//         if(err){
//             console.log('file NOT saved.');
//         }
//         else{
//             console.log('file saved.');
//         }
//         console.log('file saved.');
//     });
//     console.log(3);

// }
// else if(command === 'read'){
//     fs.readFile('./dataddd.txt', {encoding: 'utf8'}, function(err, body){
//         if(err){
//             if(err.code === 'ENOENT'){
//                 console.log('File not found');
//             }
//             else{
//                 console.log('read error', err);
//             }
//         }
//         else{
//             console.log('file opened: ', body);
//         }
//     });
// }
// else if(command === 'append'){
// fs.appendFile('./data.txt', input[0], function(err){
//     if(err){
//         console.log('err',err);
//     }
//     else{
//         console.log('file appended.')
//     }
// });
// }
// else if(command === 'createRecord'){
//     let obj ={
//         name: inputs[0],
//         family: inputs[1],
//         email: inputs[2]
//     }
//     fs.readFile('./data.json', {encoding: 'utf8'}, function(err, body){
//         if(err){
//             if(err.code === 'ENOENT'){
//                 console.log('File not found');
//             }
//             else{
//                 console.log('read error', err);
//             }
//         }
//         else{
//             console.log('file opened: ', body);

//             body = JSON.parse(body);
//             body.records.push(obj);
//             body = JSON.stringify(body);

//             fs.writeFile('./data.json', body, function(err){
//                 if(err){
//                     console.log('err', err)
//                 }
//                 else{
//                     console.log('createRecord done.');
//                 }
//             });
//         }
//     })
// }
// else if(command === 'updateRecord'){
//     let obj ={
//         name: inputs[1],
//         family: inputs[2],
//         email: inputs[3]
//     }
//     fs.readFile('./data.json', {encoding: 'utf8'}, function(err, body){
//         if(err){
//             if(err.code === 'ENOENT'){
//                 console.log('read error: File not found');
//             }
//             else{
//                 console.log('read error', err);
//             }
//         }
//         else{
//             console.log('file opened: ', body);

//             body = JSON.parse(body);
//             for(let i=0; i<body.records.length; i++){
//              if(body.records[i].name === inputs[0]){
//                 body.records[i] = obj;
//              }   
//             }
//             body = JSON.stringify(body);

//             fs.writeFile('./data.json', body, function(err){
//                 if(err){
//                     console.log('err', err)
//                 }
//                 else{
//                     console.log('createRecord done.');
//                 }
//             });
//         }
//     })
// }
// else {
//     console.log("command not found.")
// }


// function xxx(asghar){
//     let obj = {
//         name: inputs[0],
//         family: inputs[1],
//         age: inputs[2]
//     }
 
//     for(let key in obj){
//         console.log(asghar, obj[key]);
//     }
// }

// function yyy(asghar){
//     let obj = {
//         name: inputs[0],
//         family: inputs[1],
//         age: inputs[2]
//     }
 
//     let newObj = {};
//     for(let key in obj){
//         newObj[key] = asghar + ' ' + obj[key]
//     }
//     return newObj;
// }