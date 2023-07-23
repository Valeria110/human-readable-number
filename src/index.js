module.exports = function toReadable(num) {
    const fromOneToNineteen = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const dec = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
    const hundreds = ['', 'one hundred ', 'two hundred ', 'three hundred ', 'four hundred ', 'five hundred ', 'six hundred ', 'seven hundred ', 'eight hundred ', 'nine hundred ']
    const numStr = String(num);


  if(num === 0) return 'zero'

  if(num <= 19){
    return fromOneToNineteen[num]
  } else if(num >= 20 && num <100){
    return (dec[Number(numStr[0])] + fromOneToNineteen[Number(numStr[1])]).trim()
  } else if(numStr.length === 3 && Number(numStr.slice(1, 3)) >=10 && Number(numStr.slice(1, 3)) <=19){
    return (hundreds[Number(numStr[0])] + fromOneToNineteen[Number(numStr.slice(1, 3))]).trim()
  } else if(num % 100 === 0){
    return hundreds[Number(numStr[0])].trim()
  } else if(numStr.length === 3){
    return (hundreds[Number(numStr[0])] + dec[Number(numStr[1])] + fromOneToNineteen[Number(numStr[2])]).trim()
  }

}