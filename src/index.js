module.exports = function toReadable (number) {
  const massivNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
  if ( number < 21 ) {
    return massivNumber[number];
  } else if (number > 20 && number < 100) {
      let firstNumber = Math.floor(number / 10);
      let secondNumber = number - firstNumber * 10;

      if (secondNumber === 0) {
        return `${massivNumber[18 + firstNumber]}`;
    }
    return `${massivNumber[18 + firstNumber]} ${massivNumber[secondNumber]}`;
  } else {
       let firstNumber = Math.floor(number / 100);
       let secondNumber = Math.floor((number % 100) / 10);
       let thirdNumber = number % 10;

       if (number % 100 < 21 && number % 100 !== 0 ) {
           return `${massivNumber[firstNumber]} ${massivNumber[28]} ${massivNumber[number % 100]}` ;
       }
       if (thirdNumber === 0 && secondNumber === 0) {
        return `${massivNumber[firstNumber]} ${massivNumber[28]}`;
       }
       if (thirdNumber === 0) {
        return `${massivNumber[firstNumber]} ${massivNumber[28]} ${massivNumber[18 + secondNumber]}`;
       } 
       if (secondNumber === 0) {
        return `${massivNumber[firstNumber]} ${massivNumber[28]} ${massivNumber[thirdNumber]}` ;
       }
       return `${massivNumber[firstNumber]} ${massivNumber[28]} ${massivNumber[18 + secondNumber]} ${massivNumber[thirdNumber]}`
  }
}

