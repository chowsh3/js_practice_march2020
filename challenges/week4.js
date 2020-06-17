function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let arrayOfLessthan1 = [];
  for(let i = 0; i < nums.length; i ++){
    if(nums[i] < 1){
      arrayOfLessthan1.push(nums[i]);
    }
  }
  return arrayOfLessthan1;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let arrayNames = [];
  for (let i = 0; i< names.length; i ++){
    if(names[i].startsWith(char)){
      arrayNames.push(names[i])
    }
  }
  return arrayNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let arrayVerbs = [];
  for (let i = 0; i< words.length; i ++){
    if(words[i].startsWith("to ")){
      arrayVerbs.push(words[i])
    }
  }
  return arrayVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let arrayIntegers = [];
  for (let i = 0; i< nums.length; i ++){
    if(Number.isInteger(nums[i])){
      arrayIntegers.push(nums[i])
    }
  }
  return arrayIntegers;

 
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cityNames = [];
  for (let i=0; i<users.length; i++){
  (cityNames.push(users[i].data.city.displayName))
  }
  return cityNames;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRootArray=[];
  for (let i=0; i<nums.length; i++){
    squareRootArray.push(Math.round(Math.sqrt(nums[i])*100)/100);
  }
  return (squareRootArray)
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
