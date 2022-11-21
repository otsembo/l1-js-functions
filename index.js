// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function randomAddition(){
    const num1 = 15
    const num2 = 30
    console.log("Addition: ",num1 + num2)
}
randomAddition()

//TODO: create a function that takes in two values and adds them
function add(num1, num2){
    console.log("Addition:",num1 + num2)
}
add(50, 33)


//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addition(num1, num2){
    const sum = num1 + num2
    return sum
}
const x = addition(78, 21)
console.log("addition:", addition(78, 21));


// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const randomAdder = function(){
    const num1 = 15
    const num2 = 30
    console.log("Addition: ",num1 + num2) 
}

randomAdder()

//TODO: create a function that takes in two values and adds them
const adder = function(num1, num2){
    console.log("Addition: ",num1+num2)
}
adder(80,88)


//TODO: create a function that takes in two values, adds them and returns the value of the addition
const additionExtra = function(num1, num2){
    return num1+num2
}
console.log("Addition: ",additionExtra(65, 76));

// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const randomAdderExtra = () => {
    const num1 = 15
    const num2 = 30
    console.log("Addition: ",num1 + num2) 
}
randomAdderExtra()

//TODO: create a function that takes in two values and adds them
const adderExtra = (num1, num2) => {
    console.log("Addition: ", num1 + num2);
}
adderExtra(40, 33)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const subtract = (num1, num2) => num1 - num2
console.log("Subtraction: ", subtract(30,15))

const subtractExtra = (num1, num2) => {
    console.log("Subtraction being done")
    return num1 - num2
}

console.log("Subtraction: ", subtractExtra(30, 15))

