let a = [8, 17, 42, 99];

a.sort(function(a, b) { return a - b; });

a.forEach((item) => {
  console.log(item);
});
