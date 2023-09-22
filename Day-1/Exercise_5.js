const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]


  //Print the price of each product using forEach
  //Print the product items as follows using forEach
  //Calculate the sum of all the prices using forEach\

let cost = 0
  products.forEach(Element => {
    if(typeof Element.price == 'number') cost +=  Element.price
    console.log(Element.product + ' ' +  Element.price ) ;

})
console.log('cost :' + cost) 


