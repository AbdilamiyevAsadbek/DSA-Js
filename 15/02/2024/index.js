function happyNumber(num) {
    let sum = 0;

    while (num !== 1 && num !== 4) {
      sum = 0
      while (num > 0) {
        const digit = num % 10
        sum += digit * digit
        num = Math.floor(num / 10)
      }
      num = sum
    }
    return num === 1
  }
  
  console.log(happyNumber(19))
  console.log(happyNumber(10))