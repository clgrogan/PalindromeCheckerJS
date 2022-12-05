const palindrome = (str) => {
  const strArr =  str.toLowerCase().replace(/_|\./g, '').split(/[^a-z0-9@]*/g);
  for (let i = 0; i < strArr.length/2; i++) {
    if (strArr[i] != strArr[strArr.length -i -1])
      return false;
  }
  return true;
}

// trues
console.log(palindrome("eye")); 
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("My age is 0, 0 si ega ym."));
// falses
console.log(palindrome("not a palindrome"));
console.log(palindrome("almostomla"));
console.log(palindrome("five|\_/|four"));