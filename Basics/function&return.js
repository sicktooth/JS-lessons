function getMilk (money, costPerBottles) {
    console.log ("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log ("buy " + calcBottles(money, costPerBottles) + " bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

   return calcChange (money, costPerBottles);
}
function calcBottles(startingMoney, costPerBottles) {
    var numberOfBottles = Math.floor (startingMoney / costPerBottles);

    return numberOfBottles;
}

function calcChange (startingMoney, costPerBottles) {
    var change = startingMoney % costPerBottles;
    return change;
}

console.log ("Hello master, here is your " + getMilk (5, 1.5) + " change");