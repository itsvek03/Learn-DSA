/**
 *  * Write a recursive function to reverse the string
 *  
 *  ? Methods
   * ? Start
   *  ? Make a recursive function reverseString(str)
 
 * **/

function reverseString(str, index) {
  if (index == 0) {
    return str[index]
  }
  return str[index] + reverseString(str, index - 1)
}
const str = 'water'
console.log(reverseString(str, str.length - 1))
