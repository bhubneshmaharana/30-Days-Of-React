//LEVEL 1

//1.DECLARE A EMPTY ARRAY
// var arr = new Array()
// // or
// var arr = []
// // or 
// var arr = Array()

// //2.array with 5 elements 
//  arr = ['a','b','c','d','e']

// //length of the array 
// let length = arr.length

// //get
//    // first iteam 
// let first = arr[0]

//    //mid iteam 
// let mid = arr[3]

//    //end iteam 
// let end = arr[3]

// //5.
// let  mixedDataTypes = [
//         'string',
//         10,
//         true,
//         { objName:'name', objSize:10 },
//         null,
//         undefined
// ]

// let mixedDataTypes_length = mixedDataTypes.length



// //6.
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']

//7.
console.log("itCompanies :" + itCompanies)

// //8.
// console.log("numer of companies :" + itCompanies.length)

// //9.
// console.log("first companies :" + itCompanies[0])
// console.log("mid companies :" + itCompanies[(itCompanies.length-1)/2])
// console.log("last companies :" + itCompanies[itCompanies.length-1])

// //10.
// for(let i=0; i<itCompanies.length-1 ;i++){
//         console.log("Companies " + (i+1) + ":" + itCompanies[i])
// }

// //11.
// for(let i=0; i<itCompanies.length-1 ;i++){
//         console.log("Companies " + (i+1) + ":" + itCompanies[i].toUpperCase())
// }

// //12.
// console.log(itCompanies.join(',') + "are big companies")

// //13.
// const company = 'Apple' ;
// itCompanies.includes(company) ? console.log(company) :console.log("company not found")

// //14.
// let count
// for(let i=0 ; i<itCompanies.length ; i++)
// {
//         count=0 
//         for(let j=0;j<itCompanies[i].length ;j++){
//                 if(itCompanies[i][j]=='o') count++ ;
                
//         }
//         if(count <= 1) 
//                { //itCompanies.splice(i,1)
//                 console.log(itCompanies[i])
//               }
// }
//console.log(itCompanies)
 
//15.
// const sort_itCompanies = itCompanies.sort()
// console.log("sorted it companies :" + sort_itCompanies)

// //16.
// const reverse_itCompanies = itCompanies.sort().reverse()
// console.log("reverse it companies :" + reverse_itCompanies)

//17.splicing the first 3 elements 
// itCompanies.splice(0,3)
// console.log("after splicing first three elements:" + itCompanies)

//18.splicing the first 3 elements 
// itCompanies.splice((itCompanies.length-3),3)
// console.log("after splicing lest three elemnt:" + itCompanies )

//19.
// itCompanies.splice((itCompanies.length-1)/2,1)
// console.log("after splicing middle element:" + itCompanies )

//20.
// itCompanies.splice(0,1)
// console.log("after first element:" + itCompanies )

// //21.
// itCompanies.splice((itCompanies.length-1)/2,1)
// console.log("after mid element:" + itCompanies )

//22.
// itCompanies.splice(itCompanies.length-1,1)
// console.log("after last element:" + itCompanies )

//23.
// itCompanies.splice(0)
// console.log("after removing all element:" + itCompanies )


//LEVEL 2

// 1.
// import {countries} from './countries.js' ;
// import {webTechs} from './web_techs.js' ;


// console.log('countries :' + countries )
// console.log('webTechs :' + webTechs )

 //2.
// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// const arr = text.split(" ")
//   const size = arr.length

//   console.log(arr )

// 3. 
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// if(!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat')
// if(!shoppingCart.includes('Suger')) shoppingCart.push('Suger')

// let allergy = 1;

// if(allergy) shoppingCart.splice(4,1)

// shoppingCart.splice(3,1,'Green Tea')


// console.log(shoppingCart)

// 4.

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]
//   countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia')

// 5.
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//   ]

//   webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass')
  
//   console.log(webTechs)

// 6.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd)

// console.log(fullStack)


//LEVEL 3

//1.
//  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//  ages.sort()

//  console.log('Age :'  + ages )
//  const minAge = ages[0]
//  console.log('minAge :'  + minAge )
//  const maxAge = ages[ages.length-1]
//  console.log('maxAge :'  + maxAge )
//  console.log('meadianAge :'  + (ages.length%2 == 0 ? ages[(ages.length)/2] : ages[(ages.length-1)/2] ))
//  let sum = 0;
//  for(let i=0 ; i< ages.length ;i++)
//  {
//     sum+=ages[i]
//  }
// let avg = sum / ages.length
//  console.log('avgAge :' +  Math.floor(avg))
//  console.log('rangeAge :' +  (maxAge - minAge))

//  console.log((minAge-avg) == (maxAge-avg))
//  console.log(Math.abs(minAge-avg))
 
// 2.

//  const Contries = require('./countries');

// if(Contries.length%2 == 0){
//     console.log('middle countries :' + Contries[Contries.length/2] + ' ' + Contries[Contries.length/2 -1])

// }
// else 
// {
//     console.log('middle countries :' + Contries[(Contries.length-1)/2])
// }

//3.

// if(Contries.length%2 == 0){
//    let  newCountries = Contries.splice((Contries.length/2) )
//    console.log(newCountries.length)
//    console.log(Contries.length)
// }
// else{
//     let  newCountries = Contries.splice((Contries.length-1)/2)
//     console.log(newCountries.length)
//     console.log(Contries.length)
// }
