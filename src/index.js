/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let pairsCount = 0;
  let memoryOfIndexes = [];

  preferences.forEach((first, index) => {
    let isCheckNeeded = true;
    if(memoryOfIndexes.includes(first-1)) {
      isCheckNeeded = false;
    }

    if (isCheckNeeded) {
      let length = preferences.length;
      let second;
      let third;
  
        if (checkIsNumberValueOutOfArray(first - 1, length)) {
          let second = preferences[first - 1];
  
          if (checkIsNumberValueOutOfArray(second - 1, length)) {
            let third = preferences[second - 1];

              if(first === second) {

              } else {
                  if (third - 1 === index) {
                      pairsCount++;
                      memoryOfIndexes.push(first-1);
                      memoryOfIndexes.push(second-1);
                      memoryOfIndexes.push(third-1);
                  }
              }
          }
        }
    }
  });

  return pairsCount;
};

function checkIsNumberValueOutOfArray(number, length) {
  if (number >= 0 && number < length) {
    return true;
  } else {
    return false;
  }
}
