// let numbering = parseInt(prompt("how many numbers you would check out?:  "));

// let divThree = 0;
// let divTwo = 0;
// for (let i = 1; i <= numbering; i++){
//     console.log(i);
//     if (i % 3 === 0){
//         console.log('rizz');
//         divThree++;
//     }else if (i % 2 === 0){
//         console.log('fizzz');
//         divTwo++;
//     }
// }
// console.log(divThree, divTwo);
// alert("there are " + divThree + " 3/divisibles.. and there are " + divTwo + " 2/divisibles..");

//simple for let loop

// let cartQuantity = prompt("how many items would you like to buy: ");

// if(cartQuantity == 1){
//     console.log('truly');
//     alert('your cart has 1 product !');
// }else if(cartQuantity != 0){
//     alert(`your cart has
// ${cartQuantity} products !`);

// }else{
//     alert('your cart has no products..');
// }

// parameter1 = parseInt(prompt("how much will you spend with us today?"));

// function calculateTax(parameter1){
//     console.log(Math.round(parameter1 * 1.07));

// }
// calculateTax(parameter1);

//or you could
function calculateMath(total, tax = 0.1){
    console.log(Math.round(total * tax));
}
calculateMath(200, 0.3);
calculateMath(300, 0.7);


const product = {
    name: 'socks',
    'delivery-time': '1 day',
    rating: {
        stars: 'not that good',
        count: 'not that many (87)'

    },
    fun: function functionInObject(){
        console.log("this is a function within an object");
    }
};

console.log(product.name, product.rating);
console.log(product['name']);
product.fun();

const jsonString = JSON.stringify(product);
console.log(jsonString);
console.log(JSON.parse(jsonString));