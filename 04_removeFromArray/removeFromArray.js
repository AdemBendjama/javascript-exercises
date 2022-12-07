const removeFromArray = function(array,...values) {
    // find the indexes of the passed values in the 'array' array
    let indexes = [];
    // go throught the passed values 
    // we use the rest paramaters to allow for multiple arguments to passed
    // then we loop through them like an array
    // if .indexOf return -1 it means the value doesnt exists in the array
    // so we dont add -1 to the our list of indexes
    values.forEach(value => {
        let index = array.indexOf(value);
        if(index!=(-1)){
            indexes.push(index);
        }
    });

    // we sort the indexes table from smallest to biggest to avoid
    // the .splice() from encountering an error and removing the wrong value
    // since when removing a value from table all indexes and values move by -1 
    // after a value is removed, so best way to do it is to start removing from
    // the end of the array until the beggining
    indexes.sort();
    
    // we remove the values from the array
    // this is done easily since we have the indexes to be removed;
    // we start splicing and removing from the tail end of the array
    for (let i = indexes.length - 1; i >= 0 ; i--) {
        array.splice(indexes[i],1)    
    }

    // we returned the modified array
    return array;
};

removeFromArray([8,9,1,3],1,8);

// Do not edit below this line
module.exports = removeFromArray;
