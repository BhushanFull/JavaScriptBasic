function removeDublicate(array) {
    let set = new Set();
    array.forEach(element => {
        set.add(element);
    });
    return [...set];
}

// const arr = [1,2,2,2,4,5,7,6,7]

// console.log(removeDublicate(arr));
module.exports = removeDublicate;