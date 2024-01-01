function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "It's a leap year."
            } else {
                return "It's not a leap year."
            }
        } else {
            return "It's a leap year."
        }
    } else {
        return "Not a leap Year."
    }
}
leapYear (prompt("input year"));
alert (leapYear());