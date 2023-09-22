/*
LEVEL 1

// 1.
function fullName(firstName,lastName){
    return  `${firstName}  ${lastName}`;
}

console.log(fullName('bhubnesh','maharana'))

// 2.
function addNumbers(a,b) {
    return a+b
}
 
console.log(addNumbers(3,8))

// 3.
function calculates_areaOfCircle(r){
    return 3.14*r*r;
}
console.log(calculates_areaOfCircle(7))

// 4.
function convertCelciusToFahrenheit(C){
    return  (C * (9/5)) + 32;
}
console.log('F =' + convertCelciusToFahrenheit(10))

// 5.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
// bmi = weight in Kg / (height x height)  

function BMI(weight,height) {
 let   bmi = weight/(height*height);
    
   if(bmi < 18.5) return   ` underweight ` ;
   else if(bmi < 24.9) return   ` normal weight `;
   else if(bmi < 29.9) return   ` overweight `;
   else ` obese `;
 }

 console.log(BMI(61,1.9))
 

 // 6. 
 const summer = [5,6,7]
 const Winter = [11,12,1]
 const Spring = [8,9,10]
 
let checkSeason = (month) => {
    if(summer.find(sum => sum  == month) ) return  `Summer`
    else if(Winter.find(sum => sum  == month) ) return  `Winter`
    else if(Spring.find(sum => sum  == month) ) return  `Spring`
    else return    `Autumn`

}

console.log(checkSeason(3))


// LEVEL 2

// 1.
let Divergense = (a=0,b=0,c=0) =>{
 return (b*b)-(4*a*c) ;
} 
const solveQuadratic = (a=0,b=0,c=0) => {
    let D = Divergense(a,b,c) 
    if(D>0)
    return `rea and distinct roots : ${(-b-Math.sqrt(D))/2} and ${(-b+Math.sqrt(D))/2}`
else if(D==0)
    return `real and equal roots : ${(-b/2)}`
    else 
    return `real roots doesn't exist`
}
console.log(solveQuadratic(2,3,4))
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 2.

const printArray = (...args) =>{
   args.forEach((Element) => {
    console.log(Element)
   })  
}
printArray(1,2,3,4,5,6)

// 3.

const showDateTime = () => {
return new  Date().toLocaleString()
}

let date = new Date().getDate()
let month = new Date().getMonth()
let year = new Date().getFullYear()
let hour = new Date().getHours()
let minutes = new Date().getMinutes()

const time = () => {return ` ${date}/${month}/${year}  ${hour}:${minutes}`
}
console.log(time())


// 4.


function swapValues(x,y) {
    let temp = x
    x = y
    y = temp
   // return  ` x : ${x}  and y : ${y}`
   console.log(x + ' ' + y)
}
// console.log(swapValues(3,4))

// 5.


const reverseArray = (arr) =>   {
    console.log('before reversing :' +  arr);
    for (let i = 0; i<(arr.length-1)/2 ; i++ ) {
    let temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
    }
    
    console.log('after reversing :' +  arr)
}

reverseArray([1,2,3,4,5,6,7])


// 6.
const capitalizedArray = (arr) => {
    console.log(arr)
    const NewArray = []
    arr.forEach(Element => {
        NewArray.push(Element.toUpperCase())
    })
    return NewArray
}

console.log(capitalizedArray(['a','b','c','e','d']))

// 7.
const NewArray = []
const addItem = (...args) => {
    

    for(const key of args){
        NewArray.push(key)
    }
}

addItem('apple','milk','bread','bun')
console.log(NewArray)

// 8.


const removeItem = (...args) => {
    

    for(const key of args){
        if(NewArray.includes(key)) 
        {
            NewArray.splice(NewArray.indexOf(key),1)
        }
    }
}
removeItem('apple')
console.log(NewArray)

// 9.

const evensAndOdds = (num) => {
    let evenCout 
    num%2==0  ? evenCout = 1 : evenCout =0 
 return ` even count : ${(num/2+evenCout)}   and  odd count : ${num/2} `
}


console.log(evensAndOdds(100));


// 10 . 

const sum = (...args) => {
    let sum =0 
    for(const key of args){
        sum += key 
    }
    return ` sum is : ${sum}`
}

console.log(sum(1, 2, 3, 4))

// 11.
let letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONOPQRSTUVWXYZ'
const userIdGenerator = (char=8) => {
    let code = ''
    for(let i=0 ;i<char ;i++){
     code += letters[Math.floor(Math.random()*62)]
    }
    return code
} 

console.log(userIdGenerator())




// level 3
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

// 1.



const userIdGeneratedByUser = () => {

    const char = prompt('enter the numbers of the charecter : ')
    const nos = prompt('enter the numbers of the output ids :')
     
    let Code =''
    
    for(let j=0;j<nos;j++){
        
    Code += '\n' + userIdGenerator(char) ;
   
}
console.log(Code)

}

userIdGeneratedByUser()

// 2.


let color = '0123456789abcdefABCDEF'
const colorHexGenerator = (char=6) => {
    let code = '#'
    for(let i=0 ;i<char ;i++){
     code += color[Math.floor(Math.random()*22)]
    }
    return code
} 
const colorRGBGenerator = () => {
    let code = 'rgb'
    const blue = Math.floor(Math.random()*225) 
    const red = Math.floor(Math.random()*225) 
    const green = Math.floor(Math.random()*225) 
    
    code += '(' + blue + ', ' + green + ', ' + red + ')'
    
    return code }

const generateColors = (type,list) => {
    let color = []

        for(let i=0;i<list;i++){
    type == 'hex' ? color.push(colorHexGenerator()) : color.push(colorRGBGenerator())

    }

    return color
}

console.log(generateColors('hex',3))
console.log(generateColors('rgb',3))

// 3.
const shuffleArray = (arr) => {
   
    let NewArray = []
let i=(arr.length) ;
let j = 0 ;

while(i--)
{
    j = Math.floor(Math.random()*(i)) ;
    NewArray.push(arr[j])
    arr.splice(j,1)
}
return NewArray ;
 }

 console.log(shuffleArray([1, 2, 3, 4, 5, 6]))

 // 4.

 const factorial = (n) => {
    if(n==1 || n==0) return 1
     return factorial(n-1)* n
 }

 console.log(factorial(10))


 // 5.
 const isEmpty = (par) => {
    // check the variable 
    if(par == null || par == undefined ) return `empty variable`
   else if(typeof par === 'string' && par.trim() === '') return `empty string`
   else if(typeof par === 'object' && Object.keys(par).length === 0) `empty object`
   else if(Array.isArray(par) === 'true' && arr.length === 0) `empty array`

    else return `not empty parameter`
 }

 let a = {
    
 }

 console.log(isEmpty(a))



 // 6.
const average = (arr) => {
    
    let sum = 0 

    for(const key of arr){
    if(typeof key !== 'number'){
        return `entered input is not a number . Give a valid input`
    }
      else 
        sum += key
    }
    return sum/arr.length

}

console.log(average([1,3,5,6]))

*/
