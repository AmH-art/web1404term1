let input=process.argv.slice(3)
let command=process.argv[2];

console.log("inputs", input)
console.log("commands", command)
console.log("----------------")
if(command == "sum"){

    console.log(Number(input[0]) + Number(input[1]));
}
    else if(command == "minus"){

        console.log(Number(input[0]) - Number(input[1]));
    }
    else if(command == "multiply"){
        console.log(Number(input[0])*Number(input[1]));

}
else if(command == "dividedby"){

    console.log(Number(input[0])/Number(input[1]));
}
else if(command == "print"){

let obj={

    name: input[0],
    family: input[1],
    age: input[2],
}
console.log("your info:", obj);
}
else{

    console.log("command not found.")
}
