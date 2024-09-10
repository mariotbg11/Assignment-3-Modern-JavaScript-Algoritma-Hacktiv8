/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak minimal 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */

function threeStepsAB(text) {
  // melakukan looping untuk memeriksa setiap karakter pada string
  for (let i = 0; i < text.length; i++) {
    // Cek jika karakter pada string terdapat 'a' dan 'b' berjarak minimal 3 karakter
    if (text[i] === "a" && text[i + 4] === "b") {
      return true;
    }
    // Cek jika karakter pada string terdapat 'b' dan 'a' berjarak 3 karakter
    if (text[i] === "b" && text[i + 4] === "a") {
      return true;
    }
  }
  // Jika tidak terdapat karakter yang valid
  return false;
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
