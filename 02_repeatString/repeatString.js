const repeatString = function(str,num) {
    let resStr = "";
    if(!(num >=0)){
        return "ERROR";
    }
for (let i = 0; i < num; i++) {
    resStr += str;
}
return resStr;
};

// Do not edit below this line
module.exports = repeatString;
