function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // let arrayOfLessthan1 = [];
  // for(let i = 0; i < nums.length; i ++){
  //   if(nums[i] < 1){
  //     arrayOfLessthan1.push(nums[i]);
  //   }
  // }
  // return arrayOfLessthan1;
  
  // const arrayOfLessthan1 = [];
  // nums.forEach(item => {
  //   if(item<1){
  //     arrayOfLessthan1.push(item);
  //   }
  // })
  const arrayOfLessthan1 = nums.filter(item=>{
    if(item<1){
      return true;
    } else {
      return false;
    }
  });

  return arrayOfLessthan1;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // let arrayNames = [];
  // for (let i = 0; i < names.length; i++) {
  //   if (names[i].startsWith(char)) {
  //     arrayNames.push(names[i])
  //   }
  // }
  // return arrayNames;

  // names.forEach(character => {
  //   if(character.startsWith(char)){
  //     arrayNames.push(character);
  //   }
  // })

  const arrayNames = names.filter(character=>{
    if(character.startsWith(char)){
      return true;
    } else {
      return false;
    }
  });
  return arrayNames
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // let arrayVerbs = [];
  // for (let i = 0; i < words.length; i++) {
  //   if (words[i].startsWith("to ")) {
  //     arrayVerbs.push(words[i])
  //   }
  // }
  // return arrayVerbs;

  // let arrayVerbs = [];
  // words.forEach(word => {
  //   if(word.startsWith("to ")){
  //     arrayVerbs.push(word);
  //   }
  // });
  // return arrayVerbs;

  const arrayVerbs = words.filter(word => {
    if(word.startsWith("to ")){
      return true;
    } else {
      return false;
    }
  });
  return arrayVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // let arrayIntegers = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (Number.isInteger(nums[i])) {
  //     arrayIntegers.push(nums[i])
  //   }
  // }
  // return arrayIntegers;

  // let arrayIntegers = [];
  // nums.forEach(num => {
  //   if(Number.isInteger(num)){
  //     arrayIntegers.push(num);
  //   }
  // })
  // return arrayIntegers;

  const arrayIntegers = nums.filter(num => {
    if(num %1 ===0) {
      return num;
    }

  });
  return arrayIntegers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // let cityNames = [];
  // for (let i = 0; i < users.length; i++) {
  //   (cityNames.push(users[i].data.city.displayName))
  // }
  // return cityNames;

  // let cityNames=[];
  // users.forEach(user => {
  //   cityNames.push(user.data.city.displayName)
  // })
  // return cityNames;
  const cityNames = users.map (user => {
     return user.data.city.displayName;
  });
  return cityNames;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRootArray = [];
  // for (let i = 0; i < nums.length; i++) {
  //   squareRootArray.push(Math.round(Math.sqrt(nums[i]) * 100) / 100);
  // }
  // return (squareRootArray)
  nums.forEach(num=>{
    squareRootArray.push(Math.round(Math.sqrt(num) * 100) / 100);
  })
  return squareRootArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let newArray = [];
  // for (let i = 0; i < sentences.length; i++) {
  //   if (sentences[i].toLowerCase().includes(str)) {
  //     newArray.push(sentences[i])
  //   }
  // }
  // return newArray
  sentences.forEach(sentence => {
    if(sentence.toLowerCase().includes(str)){
      newArray.push(sentence)
    }
  })
  return newArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  var largestNumber = [0, 0, 0, 0, 0];
  for (var arrayIndex = 0; arrayIndex < triangles.length; arrayIndex++) {
    for (var subArrayIndex = 0; subArrayIndex < triangles[arrayIndex].length; subArrayIndex++) {
      if (triangles[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
        largestNumber[arrayIndex] = triangles[arrayIndex][subArrayIndex];
      }
    }
  }
  return largestNumber;



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
