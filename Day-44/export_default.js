"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findVowel(str) {
    let vowels = "aeiou";
    for (let i of str) {
        if (vowels.includes(i)) {
            console.log((`Vowel found at ${i}`));
            break;
        }
        console.log(i);
    }
}
exports.default = findVowel;
