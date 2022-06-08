// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function addBasic(){
    printValue(30 + 50)
}
// calling a function
addBasic()

//TODO: create a function that takes in two values and adds them
function addWithParam(num1, num2){
    printValue(num1 + num2)
}
// call function
addWithParam(81, 55)


//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addAndReturn(num1, num2){
    const add = num1 + num2
    return add
}

const addition = addAndReturn(99,1000)
printValue(`My addition: ${addition}`)


// 2.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const age = function(){
    printValue("20")
}
age()

//TODO: create a function that takes in two values and adds them
const addTwoNumbers = function(a, b){
    printValue(a + b)
}
addTwoNumbers(67, 90)

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const distance = function(dist1, dist2){
    return dist1 + dist2
}

printValue(`Distances: ${distance(900, 120)}`)


// 3.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const addNumbers = () => {
    printValue(20 + 7)
}
addNumbers()

//TODO: create a function that takes in two values and adds them
const sum = (a, b) => {
    printValue(a + b)
}
sum(33, 77)


//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addVal = (i, j) => i + j;
printValue(`Addition: ${addVal(99,300)}`)
const addValues = (i, j) => {
    const add = i + j
    return add
}
printValue(`Addition: ${addValues(99,300)}`)

