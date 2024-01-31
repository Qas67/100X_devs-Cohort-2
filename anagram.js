/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length==str2.length){
    let t=0;
    for(let i=0;i<str1.length;i++){
      for(let j=0;j<str1.length;j++){
        if(str1[i]==str2[j]){
          t++;
          break;
        }
      }
    }
    if(t==str1.length){
      t=0;
      for(let i=0;i<str1.length;i++){
        for(let j=0;j<str1.length;j++){
          if(str2[i]==str1[j]){
            t++;
            break;
          }
        }
      }
      if(t==str1.length){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}

module.exports = isAnagram;
