/*
   LEVEL 1

// 1.
const dog = {}

// 2. 
console.log(dog) // {}

// 3.
dog.name = 'Swift'
dog.leg = 4
dog.color = 'black'
dog.age = 2
dog.bark = function() {
   return 'woof woof'
}

// 4.
console.log(dog)

// 5.

dog.breed = 'DOG'
dog.getDogInfo = function() {
    return ` my dog name is ${this.name} , he is a ${this.color} ${this.breed} and had ${this.leg} legs. He loves to ${this.bark()} `
}
console.log(dog.getDogInfo())


------------------------------------------------------------
  LEVEL 2

// 1.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
//   let tallented_person
// let temp=0
// for (const key in users) {
//              if(temp<users[key].skills.length){
//                 temp = users[key].skills.length
//                tallented_person = key
//              }
    
// }
// console.log(tallented_person)

//   // 2.
// let count_log=0
// let count_user=0

// for(const key in users){
  
//     if(users[key].isLoggedIn) count_log++
//     if(users[key].points >= 50) count_user++
// }
// console.log(count_log)
// console.log(count_user)


// 3.

for(const key in users) {
    if(users[key].skills.includes('MongoDB','React','Express','Node')) 
    console.log(key)
}

// 4. 
let Users = Object.assign(users)

Users.Bhubnesh = {
    email: 'bhubnesh2002@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 21,
    isLoggedIn: true,
    points: 60
}

console.log(Users)

// 5.

 let keys = Object.keys(users)
//  let values = Object.values(users)

 console.log('keys : ' + keys)


// 6.
for(const key in users){
    console.log(users[key],key)
}


// 7.
import countriesData from './countries.mjs';

countriesData.forEach(element => {
  console.log('country :' + element.name + '  capital :' + element.capital + '  population :' + element.population + '  language :' + element.languages)    
});
 


// LEVEL 3

// 1.

let personAccount = {
  firstName: "bhubbnesh",
  lastName: "Maharana",
  income: {},
  expenses: {},
  totalIncome: function () {
    let totalInc = 0;
    for (const key in this.income) {
      totalInc += this.income[key];
    }
    return totalInc;
  },
  totalExpenses: function () {
    let totalExp = 0;
    for (const key in this.expenses) {
      totalExp += this.expenses[key];
    }
    return totalExp;
  },
  addIncome: function (amount, description) {
    this.income[description] = amount;
  },
  addExpense: function (amount, description) {
    this.expenses[description] = amount;
  },
  accountInfo: function () {
    console.log("name :" + this.firstName + " " + this.lastName);
    console.log("income :" + this.totalIncome());
    console.log("expences :" + this.totalExpenses());
    for(const key in this.expenses){
      console.log(key,this.expenses[key])
    }
    for(const key in this.income){
      console.log(key,this.income[key])
    }
    console.log(`Account balance : ${this.totalIncome()- this.totalExpenses()}`);
  },
  accountBalance: function () {
    return this.totalIncome - this.totalExpenses;
  },
};
personAccount.addIncome(2000, "metacrafter");
personAccount.addIncome(2000, "fi");
personAccount.addExpense(200, "food");
personAccount.accountInfo();

console.log(personAccount.expenses);

*/
// .2 .a
const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  
  /*
  // if user exist 
  function userExist(email) {
    return users.some( check => check.email == email)
  }
  
  
  ///creating the sign in  function
  const signUp = function(_id,username,email,password){ 
  
    
     if(userExist(email)) {
      console.log('Account exist with this mail, sign up')
     }
      else{
       const newObject = {
        _id,
       username,
       email,
       password,
        time:new Date().toLocaleString(),
       isLoggedIn:false ,
      };
     users.push(newObject)
     console.log('account successfully created !')
      }
  }
  
  
  //creating the sigin function 
  function signIn(email,password){
  const user = users.find(user => user.email == email)
  
    if(user){
      if(user.password == password) 
      { 
        console.log('succesfully login in ' + user.username )
      user.isLoggedIn = true}
        else {
          console.log('wrong password ')
        }
    }
    else{
      console.log('account does not exis , signUp')
    }
  }
  
  //test the sign up 
  signUp('ab12ex','Alex','alex@alex.com',123123)
  signUp('qqda23','Bhubnesh','bhubnesh2002@gmail.com',243537)
  
  //test the sign in 
  signIn('bhubnesh2002@gmail.com',243537)
  signIn('bhubnesh2002@gmail.com',24357)
  signIn('bhubnesh2002@gmail.co',24357)
  
  
  // checking the users log 
  console.log(users)
  
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]
  
  // 3. 
  
  function findProduct(name){
    return  products.find(product => product.name== name)
  }
  
  function rateProduct(name,userId,rate){
    const product = findProduct(name)
  
    if(product){
    const newRating = {
      userId,
      rate,
    }
  
    product.ratings.push(newRating) 
    console.log('your rating has been succesfully added')
    }
    else{
      console.log('product does not exist')
    }
  }
  function averageRateing(name){
    const product = findProduct(name)
  
    let avg =0 
    product.ratings.forEach(element => {
  
       avg += element.rate
      
    })
    return ` avergare rating of the ${product.name} is ${avg/product.ratings.length}`
  }
  
  rateProduct('Laptop','23sd3s',2.5)
  rateProduct('Laptop','23sd3s',3.5)
  products.forEach(element => {
    console.log(element.ratings)
  });
  
  console.log(averageRateing('Laptop'))
  
  // 4.
  
  function like(name,userId){
    const product = findProduct(name)
    if(product.likes.some(like =>like == userId))
    {
      product.likes.pop()
      console.log('unliked the product XD')
    }
    else{
      product.likes.push(userId)
      console.log('liked the product ><')
    }
  }
  
  like('mobile phone','fg12cy')
  like('TV','fg12ct')
  products.forEach(element => {
    console.log(element.likes)
  })
  
  */