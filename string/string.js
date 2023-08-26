
function filter(string, badWords) {
  for (let word of badWords) {
    let stars = "*".repeat(word.length);
    string = string.replace(word, stars);
  }
  return string;
}

function reverse(str) {
  let arr = str.split("");
  arr.reverse();
  let newStr = arr.join("");
  return newStr;
}


function ToFarsi(inputString) {
  const farsiDigitsString = '۰۱۲۳۴۵۶۷۸۹';
  let convertedString = "";
  for (let index = 0; index < inputString.length; index++) {
    let character = inputString[index];
    if (character >= "0" && character <= "9") {
      convertedString += farsiDigitsString[parseInt(character)];
    } else {
      convertedString += character;
    }
  }
  return convertedString;
}

function findMostFrequentCharacter(inputString) {
  let frequency = {};
  let mostFrequent = { character: "", count: 0 };
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
    if (frequency[char] > mostFrequent.count) {
      mostFrequent.character = char;
      mostFrequent.count = frequency[char];
    }
  }
  return mostFrequent;
}

function areStringsRootsOfEachOther(string1, string2) {
  let frequency1 = {};
  let frequency2 = {};
  for (let i = 0; i < string1.length; i++) {
    let char = string1[i];
    if (char !== " ") {
      if (frequency1[char]) {
        frequency1[char]++;
      } else {
        frequency1[char] = 1;
      }
    }
  }
  for (let i = 0; i < string2.length; i++) {
    let char = string2[i];
    if (char !== " ") {
      if (frequency2[char]) {
        frequency2[char]++;
      } else {
        frequency2[char] = 1;
      }
    }
  }
  for (let key in frequency1) {
    if (!frequency2[key] || frequency2[key] !== frequency1[key]) {
      return false;
    }
  }
  for (let key in frequency2) {
    if (!frequency1[key] || frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true;
}


function formatNumberString(string) {
  let result = "";
  let counter = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    result = string[i] + result;
    counter++;
    if (counter === 3 && i > 0) {
      result = "," + result;
      counter = 0;
    }
  }
  return result;
}


function isValidParentheses(string) {
  let open = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === "(") {
      open++;
    }
    if (char === ")") {
      if (open === 0) {
        return false;
      }
      open--;
    }
  }
  return true;
}
function removeDuplicateCharacters(string) {
  let seen = {};
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!seen[char]) {
      result += char;
      seen[char] = true;
    }
  }
  return result;
}


function validatePassword(password, words) {
  if (!password || password.length < 12) {
    return 0;
  }
  if (words.includes(password)) {
    return 0;
  }
  let score = 0;
  score = password.length;
  if (/[A-Z]/.test(password)) {
    score += 2;
  }
  if (/\d/.test(password)) {
    score += 2;
  }
  if (/[a-z]/.test(password)) {
    score += 1;
  }
  return score;
}


function replaceAll(input, replaceThis, replaceTo) {
  if (!replaceThis || !replaceTo) {
    return input;
  }
  let output = "";
  let index = 0;
  while (index < input.length) {
    if (input.slice(index, index + replaceThis.length) === replaceThis) {
      output += replaceTo;
      index += replaceThis.length;
    } else {
      output += input[index];
      index++;
    }
  }
  return output;
}








