var faker = require('faker/locale/pl');

console.log("=====================");
console.log("WELCOME IN MY SHOP" );
console.log("=====================");

for(var i = 0; i < 10; i++){
    var randomProd = faker.commerce.productName(); 
var randomPris = faker.commerce.price(); 
console.log(randomProd + ' - ' + randomPris + ' NOK');
}
