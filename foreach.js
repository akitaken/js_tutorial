let a = ["ant", "bat", "cat", 42];

// create a forEach expression
a.forEach(function(element) {
  console.log(element);
});

// User forEach with Array.from
let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});


//rewriting the forEach loop using the fat arrow notation
a.forEach((element) => {
  console.log(element);
});
