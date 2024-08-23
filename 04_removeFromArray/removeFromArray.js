const removeFromArray = function(arr,...values) {
        return arr.filter((item)=> {
            return !values.includes(item);
        });
};

// Do not edit below this line
module.exports = removeFromArray;
