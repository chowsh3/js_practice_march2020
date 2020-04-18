function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.substr(1);
}

function generateInitials(firstName, lastName) {
  // if (firstName === undefined) throw new Error("firstName is required");
  // if (lastName === undefined) throw new Error("lastName is required");
  
  return (isNaN(firstName)|| isNaN(lastName)) ? (firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase())
    : (firstName === undefined) ? ("firstName is required")
      : (lastName === undefined) ? ("lastName is required")
        : "Alphabetical characters only"


}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const calcPrice = originalPrice * (1 + (vatRate / 100));

  return (parseFloat(calcPrice.toFixed(2)));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const calcSalePrice = originalPrice * (1 - (reduction / 100));
  return (parseFloat(calcSalePrice.toFixed(2)));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let middleCh = ((str.length / 2) - 1)
  if (str.length % 2 === 0) {
    return (str.charAt(middleCh) + str.charAt(middleCh + 1));
  } else {
    if (str.length % 2 !== 0) {
      return (str.charAt(str.length / 2));
    }
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  /*var splitString = word.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;*/
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  //return words.map(word=>word.split("").reverse().join(""));
  return words.map(reverseWord);

}



function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let n = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux") {
      n += 1
    }
  } return n;

}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let n = 0;
  for (let i = 0; i < scores.length; i++) {
    n += scores[i];
  }
  return Math.round((n / (scores.length)) * 100) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  /*if(n % 3===0 && n % 5 ===0){
    return "fizzbuzz";
  } else if (n % 5 === 0){
    return "buzz"
  } else if (n % 3 === 0){
    return "fizz"
  } else {
    return n;
  }
*/
  return (n % 3 === 0 && n % 5 === 0) ? "fizzbuzz"
    : (n % 5 === 0) ? "buzz"
      : (n % 3 === 0) ? "fizz"
        : n;

}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
