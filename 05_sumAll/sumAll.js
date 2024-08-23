const sumAll = function(num1,num2) {
if(typeof(num1) !== "number" || typeof(num2) !=="number"){
    return "ERROR";
}

if(!Number.isInteger(num1) || !Number.isInteger(num2)){
    return "ERROR";
}

if(!((num1>=0) && (num2>=0))){
    return "ERROR";
}

let largeNum = 0;
let smallNum = 0;
if(num1>num2){
    largeNum = num1;
    smallNum = num2;
} else {
    largeNum = num2;
    smallNum = num1;
}

let sum = 0;
for (let i = smallNum; i <= largeNum ; i++) {
    sum += i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
