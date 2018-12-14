/**
    Problem statement:
    The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
    Given two integers x and y, calculate the Hamming distance.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let binRepX = (x >>> 0).toString(2) // convert number to binary representation
  let binRepY = (y >>> 0).toString(2)
  let brLenX = binRepX.length
  let brLenY = binRepY.length
  let binRepWithPaddingX, binRepWithPaddingY
  // Pad the smaller string to make the length same as the larger string
  if(brLenX > brLenY) {
    binRepY = binRepY.padStart(brLenX, '0')
  } else if(brLenX < brLenY) {
    binRepX = binRepX.padStart(brLenY, '0')
  }
  let count = 0;
  // Get the number of differences in bits
  binRepX.split('').forEach((char, index) => {
    if(char !== binRepY[index]) {
      count++
    }
  })
  return count
};