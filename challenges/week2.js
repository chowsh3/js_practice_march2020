function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.city === "Manchester")? true : false ;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let dividePeoplebyMaxbus = people/40;
  return Math.ceil(dividePeoplebyMaxbus);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let filterSheep = arr.filter(value => value === "sheep");
  return (filterSheep.length)
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.address.city === "Manchester" && person.address.postCode.startsWith("M")) ? true : false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
