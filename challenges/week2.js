function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return (isNaN(sandwich.fillings)) ? sandwich.fillings
      :"filling should be a valid ingredient"
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.city.includes("Manchester")) ? true : false;
}

function getBusNumbers(people,pram) {
  if (people === undefined) throw new Error("people is required");
  return (people===0 && pram === undefined) ? "No buses are required"
    :(pram ===undefined || pram === 0) ? Math.ceil((people + 0)/ 40)
    :Math.ceil((people + (pram +1))/ 40)
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
