let input=process.argv.slice(2)
let command=process.argv[3];

console.log("inputs", input)
console.log("commands", command)
console.log("----------------")
if(command == "sum"){

    console.log(Number(input[0]) + Number(input[1]));}
    else if(command == "minus"){

        console.log(Number(input[0]) - Number(input[1]));
    }
    else if(command == "multiply"){
        console.log(Number(input[0])*Number(input[1]));

}
else if(command == "devidedby"){

    console.log(Number(input[0])/Number(input[1]));
}
else{

    console.log("command not found.")
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}