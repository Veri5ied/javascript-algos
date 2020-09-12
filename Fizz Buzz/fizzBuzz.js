//fizzbuzz algorithm
for (let theNumber=0; theNumber <= 100; theNumber++) {
  if (theNumber % 15 == 0){
    console.log("Fizz Buzz")
  }else if (theNumber % 5 == 0){
    console.log("Buzz")
  }else if (theNumber % 3 == 0){
    console.log("Fizz")
  }else {
    console.log(theNumber)
  }
}
