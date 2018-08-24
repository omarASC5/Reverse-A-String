function FirstReverse(str) { 
  // code goes here
  if (str === "") {
   return "";   
  } else {
     return FirstReverse(str.slice(1)) + str[0];
  }
}
   
// keep this function call here 
FirstReverse(readline());
