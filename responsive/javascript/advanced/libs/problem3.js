const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}
const calculateSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let doubledNumbers = doubleNumbers(numbers);
let sum = calculateSum(doubledNumbers);
const person = {
    name: "John",
    age: 30,
    introduce: function() {
        console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};
console.log("The sum of doubled numbers is: " + sum);
person.introduce();
