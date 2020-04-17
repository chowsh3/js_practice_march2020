function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if(person.city === "Manchester"){
    return true;
  } else {
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let dividePeoplebyMaxbus = people/40;
  return Math.ceil(dividePeoplebyMaxbus);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  filterSheep = arr.filter(value => value === "sheep");
  return (filterSheep.length)
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let personValues = Object.values(person)
  let arrayValues = Object.assign({},...personValues)
  let newPost = (arrayValues.postCode);
  return (arrayValues.city === "Manchester" && newPost.startsWith("M")) ? true
  : false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
