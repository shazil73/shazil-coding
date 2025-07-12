try {
var x = 1000
var y = 2000
var a = x * y 
console.log(a)
throw new Error("This is a custom error message")
}catch (error) {
  console.error("there was an error in the code");
    console.error(error.message);
}