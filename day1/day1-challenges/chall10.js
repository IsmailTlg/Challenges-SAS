///Challenge 10: Apply a Discount
let totalPrice = 1000;
if(totalPrice >= 500){
    let discount = totalPrice - (totalPrice*10/100);
    console.log(`the original price is ${totalPrice} DH, after discount ${discount} DH`)
}
else {
    console.log(`No discount for u since total price under 500, ur total is : ${totalPrice} DH`)
}