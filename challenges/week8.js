const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const newArr = nums.indexOf(n);
  let newOne = nums[newArr+1];
  let lengthIndex = nums[nums.length-1]
  // if (n === lengthIndex || !nums.includes(n)){
  //   return null;
  //   } else{
  //     return newOne;
  // }
  return (n === lengthIndex || !nums.includes(n)) ? null : newOne;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
 
  let result = {0:0};
  for(let i = 0; i < str.length; i++) {
    const char = str[i];
    if(result[char]===undefined){result[char] = 1;
    } else {
    result[char]+=1;
    }
  }
  return (result)
}

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const toString = n.toString();
  const strNum = Object.values(toString).reverse().join("");
  return parseFloat(strNum);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  const combineArrays = arrs.map(test => {
     return test.reduce((accumulator, currentValue)=> accumulator+ currentValue);
  })
  const reducer = (accumulator, currentValue) =>  accumulator + currentValue;
  return combineArrays.reduce(reducer);
  
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  const firstIndex = arr[0];
  const lastindexElement = arr[arr.length-1];
  const arrLength = arr.length;
  let newArr = arr.slice(1,arrLength-1);
  newArr.splice(0,0, lastindexElement);
  newArr.splice(arrLength,0, firstIndex);
  // if(arrLength<=2){
  //   return arr.reverse();
  // } else {
  //   return newArr;
  // }
  return (arrLength<=2) ? arr.reverse() : newArr;

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let hayStackValues = Object.values(haystack);
  let findWord = hayStackValues.find(word => word.includes(searchTerm));
  if(findWord.includes(searchTerm)){
    return true;
  } else {
    return false
  }

  
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
