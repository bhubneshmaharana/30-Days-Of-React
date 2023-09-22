//LEVEL 1


/* 1.
let age = prompt("enter your age :" )
age >= 18 ? console.log("You are old enough to drive") : console.log("You are left with " + (18-age) + " years to drive. ")
*/

/* 2.
let yourAge = prompt("enter your age : ")
const myAge = 25

myAge > yourAge ? console.log("you are " + (myAge-yourAge) + " years younger than me.") : console.log("you are " + (yourAge-myAge) + " years older than me.")
*/

/* 3.
let a = 4
let b = 3

a>b ? console.log(a + " is greater than " + b) : console.log(b + " is greater than " + a)
*/

/* 4.
 let num = prompt( "enter a number :")

num%2 === 0 ? console.log(num + " is an even number") : console.log(num + " is an odd number") 


-----------------------------------------------------------------------------------------------
*/

//LEVEL 2

/* 1.
let score = prompt('Enter the score :')

switch(true){
  case (score > 80) : console.log('A'); 
                      break;
  case (score > 70) : console.log('B'); 
                      break;
  case (score > 60) : console.log('C'); 
                      break;
  case (score > 50) : console.log('D'); 
                      break;
  default :    console.log('F');                  
}
*/

/* 2.
let month = prompt("Enter the month :")

if( month == 'September' || month == 'October' || month == 'November')  console.log('season is Autumn')

else if( month == 'December' || month == 'January ' || month == 'February')  console.log('season is Spring')

else console.log('season is Summer')
*/


/* 3.
// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    return capitalized;
}

// take input
let string = prompt('Enter a string: ');

let day = capitalizeFirstLetter(string)
    
day == 'Sunday' || day == 'Saturday' ? console.log(day + ' is a weekend'):console.log(day + ' is not a weekend')


------------------------------------------------------------------------------
*/

//LEVEL 3

/* 1.
// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    return capitalized;
}

// take input
let string = 'February';

let month = capitalizeFirstLetter(string)
    let year = 2004
switch(true){
    
    case month == 'January' : console.log(month + ' has 31 days.')
                             break
    case month == 'February' :if(year%4==0 && year%100!=0 || year%100==0){
                               console.log(month + ' has 29 days.')
                              }
                              else 
                             console.log(month + ' has 28 days.')
                             break
    case month == 'March' : console.log(month + ' has 31 days.')
                             break
    case month == 'April' : console.log(month + ' has 30 days.')
                             break
    case month == 'May' : console.log(month + ' has 31 days.')
                             break
    case month == 'June' : console.log(month + ' has 30 days.')
                             break
    case month == 'July' : console.log(month + ' has 31 days.')
                             break
    case month == 'August' : console.log(month + ' has 31 days.')
                             break
    case month == 'September' : console.log(month + ' has 30 days.')
                             break
    case month == 'October' : console.log(month + ' has 31 days.')
                             break
    case month == 'November' : console.log(month + ' has 30 days.')
                             break
    default : console.log(month + ' has 31 days.')
                             break
}

*/





