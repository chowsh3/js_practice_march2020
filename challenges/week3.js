function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  function square(number) {
    return number * number
  }
  return nums.map(square);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let remainingElements = words.slice(1)
  let zeroElement = words.slice(0, 1)
  let capNewArray = [];
  for (let i = 0; i < remainingElements.length; i++) {
    (capNewArray.push(remainingElements[i].charAt(0).toUpperCase() + remainingElements[i].substr(1)))
  } 
  let camelCaseNew = (zeroElement.concat(capNewArray))
  return camelCaseNew.join('')
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  const newSubjectsArray = people.map(peoples => {
    return peoples.subjects
  })
  var allLengths = newSubjectsArray.map(element => {
    return element.length;
  });
  let n = 0;
  allLengths.forEach(totalNumbers);
  function totalNumbers(number) {
    n += number;
  };
  return (n)
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      return true;
    }
  } return false;

}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let arrr1 = ([...new Set(arr1)])
  let arrr2 = ([...new Set(arr2)])
  let newArray = (arrr1.concat(arrr2))
  newArray.sort((a, b) => a - b)
  let newArr = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === newArray[i + 1]) {
      newArr.push(newArray[i]);
    }

  }

  return ([...new Set(newArr)])
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
