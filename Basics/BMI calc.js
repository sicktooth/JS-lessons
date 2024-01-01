function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / (Math.pow(height, 2)));
    return bmi;
}
bmiCalculator(65, 1.8);