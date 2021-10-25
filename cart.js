///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function (acc, current){
    return acc + current.price
},0)
    //return num1 + num2
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax)=>{
    const total = cart.map(
        (cb)=>{
          

        })
        return cartTotal = (cartTotal + (cartTotal * (tax / 100)) - couponValue)
    
    }

console.log(calcFinalPrice(10, 2, 5))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    customer Objects will have following properties:
    name: the datatype will be string because each letter in name has characters and the characters can be read by using string datatype
    streetNumber will be number datatype as it accepts the integer or floating point numbers.
    streetAddress: it accepts string data type as the street name is textual
    zipcode: it will be number dataType as zip code always consists of numbers
    isTakeout will be boolean as it is returning true or false , true if customer ask for takeout instead of delivery
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = [{
    name: 'John Miller',
    streetNumber: '102',
    streetAddress: 'cherrywood dr.',
    zipcode: '70504',
    isTakeout: 'true'

}]

//Example code I will use example of checkout page of the customer which consist of payment details

const example = [
    {
        fullName: 'Bob Smith',
        cardNumber: 380358393339,
        paymentMethod: ['card','paypal'],
        isValidCard: true
        
}]