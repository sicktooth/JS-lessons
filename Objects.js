/* var houseKeeper1 = {
    name: "Victoria",
    cleaningRepertoire : ["Bathroom", "Offices", "Lobby"],
    yearsOfExperience : 4,
    canCook : true,
    languages : ["English", "French", "Spanish"]
}
 */

function HouseKeeper (name, cleaningRepertoire, yearsOfExperience) {
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.yearsOfExperience = yearsOfExperience;
}

var houseKeeper1 = new HouseKeeper ("Victoria", ["Lobby", "Bathroom", "Offices"], 5);