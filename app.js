// function factorial(n) {
//   if (n <= 0) {
//     return "neg num or 0";
//   }
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(8.3));

function occupy(today, yesterday) {
  let both = 0;
  for (let n = 0; n < today.length; n++) {
    if (today[n] === "C" && yesterday[n] === "C") {
      // if the input of today, which is accessed with the brackets [n] or something
      // then if boTH today and yESTERDAY  haV e c, ADD ONE  tO THE LIST OF BOTh.
      both++;
    }
  }
  console.log(both);
}

// occupy(".C.", ".CC.C");

/*
Psuedocode
function binaryToDecimal(binary value){
  1. get the binary value (let say its 1010)
  2. convert into a string and seperate ([1, 0, 1, 0])
  3. loop through that string BACKWARDS, starting from the first value of the binary then i-- or something like that.
  3a. see if the value of each thing in the string is 1 or 0 until the end is reached. if its 0, then ignore it, but if it's one, make it equal to 2^x, where x is the place of the digit (>1< 010 == 2^3 )
  4. add up the values in the end
}

*/

function binaryToDecimal(b) {
  let dec = 0;
  for (let i = b.length - 1; i >= 0; i--) {
    if (b[i] === "1") {
      dec += 2 ** (b.length - 1 - i); // 2*2*2
    }
  }

  console.log(dec);
}

binaryToDecimal("1010"); // 8 + 0 + 0 + 1 = 10

function decimalToBinary(d) {
  let bin = "";
  while (d != 0) {
    if (d % 2 == 1) {
      bin += "1";
      d = (d - 1) / 2;
    } else {
      bin += "0";
    }
  }

  return bin;
}

console.log(decimalToBinary("8"));

// biggest power of 2 thats less than base ten? what
