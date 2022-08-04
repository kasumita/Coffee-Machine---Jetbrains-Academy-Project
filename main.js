// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

/*console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!`)*/

/*console.log('Write how many cups of coffee you will need:');
let quantity = input();
console.log(`For ${quantity} of coffee you will need:
${quantity*200} ml of water
${quantity*50} ml of milk
${quantity*15} g of coffee beans`);*/

/*console.log('Write how many ml of water the coffee machine has:');
let waterAvailable = input();
console.log('Write how many ml of milk the coffee machine has:');
let milkAvailable = input();
console.log('Write how many grams of coffee beans the coffee machine has:');
let coffeeAvailable = input();
console.log('Write how many cups of coffee you will need:');
let cupsWanted = input();
let cupsMakeable = 0;
//if (waterAvailable>=(cupsWanted*200) && milkAvailable>=(cupsWanted*50) && coffeeAvailable >=(cupsWanted*15)){}
while (waterAvailable>= 200 && milkAvailable>=50 && coffeeAvailable>=15){
    waterAvailable-=200
    milkAvailable-=50
    coffeeAvailable-=15
    cupsMakeable++
}
if (cupsMakeable == cupsWanted){
    console.log('Yes, I can make that amount of coffee');
} else if (cupsMakeable>cupsWanted){
    console.log(`Yes, I can make that amount of coffee (and even ${cupsMakeable-cupsWanted} more than that)`);
}else {
    console.log(`No, I can make only ${cupsMakeable} cups of coffee`);
}*/
let water = 400;
let money = 550;
let milk = 540;
let beans = 120;
let cups = 9;
let sugar = 50;

let action = "";
do{
console.log('\nWrite action (buy, fill, take, remaining, exit):')
action = input();
let typeOfCoffee;
let sweet ;
switch (action){
    case "buy":
        console.log('\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:');
        typeOfCoffee = Number(input());
        console.log('Do you want sugar? yes / no');
        sweet = input();
        if (sweet == "yes") sugar -=1;

        switch (typeOfCoffee){
            case 1:
                if (water >= 250 && beans >= 16 & cups >=1){
                water-=250;
                beans-=16;
                money+=4;
                cups -= 1;
                console.log('I have enough resources, making you a coffee!');
                break;} else {
                    if (water<250) console.log('Sorry, not enough water!');
                    else if (beans < 16) console.log('Sorry, not enough coffee beans!');
                    else if (cups < 1) console.log('Sorry, not enough disposable cups!');
                break;
                }
            case 2:
                if (water >= 350 && milk >=75 && beans >= 20 & cups >=1){
                water-= 350;
                milk -= 75;
                beans -= 20;
                money += 7;
                cups -= 1;
                break;
                } else {
                    if (water<350) console.log('Sorry, not enough water!');
                    else if (milk < 75) console.log('Sorry, not enough coffee beans!');
                    else if (beans < 20) console.log('Sorry, not enough coffee beans!');
                    else if (cups < 1) console.log('Sorry, not enough disposable cups!');
                    break;
                }
            case 3:
                if (water >= 200 && milk >= 100 && beans >= 12 & cups >=1){
                water -= 200;
                milk -= 100;
                beans -= 12;
                money += 6;
                cups -= 1;
                break;
                } else {
                    if (water < 200) console.log('Sorry, not enough water!');
                    else if (milk < 100) console.log('Sorry, not enough coffee beans!');
                    else if (beans < 12) console.log('Sorry, not enough coffee beans!');
                    else if (cups < 1) console.log('Sorry, not enough disposable cups!');
                    break;}}
        break;
    case "fill":
        console.log('\nWrite how many ml of water you want to add:');
        water += Number(input());
        console.log('Write how many ml of milk you want to add:');
        milk += Number(input());
        console.log('Write how many grams of coffee beans you want to add:');
        beans += Number(input());
        console.log('Write how many disposable coffee cups you want to add:');
        cups += Number(input());
        break;
    case "take":
        console.log(`\nI gave you $${money}`);
        money = 0;
        break;
    case "remaining":
        console.log(`
The coffee machine has:
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${cups} disposable cups
$${money} of money
${sugar} of sugar`);
        break;
}} while (action !== "exit");
