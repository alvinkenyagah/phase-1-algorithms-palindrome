function isPalindrome(word) {
  let splitWord = word.split("");
  let reversedArray = splitWord.reverse();
  let reversedWord = reversedArray.join("");

  return reversedWord === word;
}
isPalindrome("ab");
isPalindrome("a");
isPalindrome("abba");
isPalindrome("racecar");
isPalindrome("robot");

/* 
  Add your pseudocode here

  Function isPalindrome(word):
splitWord = split word into an array of characters
reversedArray = reverse the order of characters in splitWord
reversedWord = join characters in reversedArray into a single string
return true if reversedWord is equal to word, false otherwise.


*/

/*
  Add written explanation of your solution here

isPalindrome that takes in a single parameter called word.
The function first splits the input word into an array of its characters using the split() method and stores it in a variable called splitWord.
It then reverses the order of the characters in splitWord using the reverse() method and stores it in a variable called reversedArray.
Finally, it joins the characters in reversedArray into a single string using the join() method and stores it in a variable called reversedWord.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
