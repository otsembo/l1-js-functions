// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function add(){
    const addition = 10 + 20
    printValue(`Addition: ${addition}`)
}
add()

//TODO: create a function that takes in two values and adds them
/**
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 */
function addTwo(num1, num2){
    //const divide = 20 / 4
    printValue(`Addition: ${num1 + num2}`)
}

addTwo(40, 35)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
// addTwoAndReturn
function addTwoAndReturn(num1, num2){
    const addition = num1 + num2
    return addition
}

function defaultParams(num1, num2 = 10 , num3 = 20){
    return num1 + num2 + num3
}

function example(num1 = 10){
    printValue("Number provided: "+num1)
}
example(50)

const anotherAddition = defaultParams(10, 30)
printValue(`Default: ${anotherAddition}`)

const myAddition = addTwoAndReturn(67, 90)
printValue(`Some other addition: ${myAddition}`)


// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const addExpression = function(){
    const addition = 10 + 20
    printValue(`Addition: ${addition}`)
}
addExpression()

//TODO: create a function that takes in two values and adds them
const addTwoY = function(num1, num2){
    printValue(num1 + num2)
}
addTwoY(30, 90)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addTwoX = function(num1, num2){
    return num1 + num2
}
const otherAddition = addTwoX(30, 90)

// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const arrowAdd = () => {
    printValue(20 + 30)
}
arrowAdd()

//TODO: create a function that takes in two values and adds them
const addTwoParam = (num1, num2) => {
    printValue(num1 + num2)
}

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addTwoParamReturn = (num1, num2) => {
    return (num1 + num2)
}

