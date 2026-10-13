function showmenu(){
console.log("MENU:")
console.log("Soft Drinks:Rs.50")
console.log("Chocolate:Rs.20")
console.log("Chips:Rs.20")
console.log("Biscuits:Rs.30")
console.log("Energy Drinks:Rs.50")
}
function getprice(itemno){
    if(itemno==1){
        return 50;
    }
    else if(itemno==2){
        return 20;
    }
    else if(itemno==3){
        return 20;
    }
    else if(itemno==4){
        return 30;
    }
    else{
        return 50;
    }
}
function buy(){
let itemno=Number(prompt("Enter Item Number:"));
let amount=Number(prompt("Enter The Amount You Have:"));

if(itemno>5){
    alert("Item is not Available");
}
if(amount<=0){
    alert("Invalid Amount")
}
let price=getprice(itemno);
if (amount<price){
    alert("Insufficient balance.Price is Rs."+price);
}
let change=amount-price;
alert("You selected item" + itemno + ".Change returned:Rs."+change);
for(let i=3;i>=1;i--){
    console.log(i)
}
console.log("Your Item Is Ready!");
}
showmenu();
buy();
let again=confirm("Do you want to make another purchase?");
if (again==true){
    showmenu();
    buy();
}
alert("Thank you!Goodbye")
