console.log(getMiddle([1,2,3,4]));
console.log(getMiddle([1,2,3,4,5]));

function getMiddle(arr){
    return arr.splice(Math.floor((arr.length-1) / 2), 1)[0]
}

Array.prototype.middle = function () {
    const
        half = this.length >> 1,
        offset = 1 - this.length % 2;
    return this.slice(half - offset, half + 1);
};

console.log([1, 2, 3, 4, 5].middle());
console.log([1, 2, 3, 4].middle());