var guestList = ["Samuel", "Dave", "Angela", "Princess", "Joy", "Felix"];
var checkGuest = prompt ("What is your name?");
if (guestList.includes(checkGuest)){
    alert ("Welcome.");
} else {
    alert ("Your name's not on the list "+ checkGuest + ", sorry maybe next time.");
}