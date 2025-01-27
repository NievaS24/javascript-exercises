const removeFromArray = function(array, ...args) {
    if (args.length > 0) {
        for (let i = 0; i < args.length; i++) {
            do {
                index = array.indexOf(args[i]);
                if (index != -1) {
                    array.splice(index,1);
                }           
            } while (index != -1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
