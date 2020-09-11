let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// MAP

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));


// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));


// takes in the states variable and returns an array of URLs
// of the form https://example.com/<urlified form>

function urlArray(elements) {
  return elements.map(element => "https://example.com/" + urlify(element) );
}
console.log(urlArray(states));


// FILTER

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  })
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version:
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));


// check Dakota: test for the presence of the string “Dakota”
function checkDakota(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(checkDakota(states));

// check Dakota: Regex test for length === 2
function functionalDoubles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDoubles(states));

// REDUCE

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative Solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function (n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

function functionalSum(elements) {
  return elements.reduce((total, n) => {return total +=n});
}
console.log(functionalSum(numbers));


// product: functional Solution
function functionalProduct(elements) {
  return elements.reduce((total, n) => {return total *=n});
}
console.log(functionalProduct(numbers));

// lengths: Imperative Solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths functional Solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));
