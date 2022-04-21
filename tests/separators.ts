import { getRandomNumber } from "./randomNumber";

//should we accept other ascii characters? - should we pass numbers? - We are assuming that only the characters between 32 - 47 && 58 - 126 will be passed
export function generateSeparators(): string {
    let separators = '';
    for (let c = 0; c < getRandomNumber(1,10); c++){
        let num = Math.random() > 0.5 ? Math.floor(getRandomNumber(32, 47)) : Math.floor(getRandomNumber(58, 126));
        if (num === 45 || num === 46 || num === 91 || num == 93) num = 47;//not containing: '.', '-', '[', ']'
        let char = String.fromCharCode(num);
        if (c === 6 || c === 7) {
            separators += '[';
            //warning, there is the possibility of having the angle brackets, and not having any value inside, lets see
            for (let c2 = 0; c2 < Math.floor(getRandomNumber(0,10)); c2++) {
                separators += char;
            }
            separators += ']';
        } else {
            separators += char;
        }
    }
    return separators;
}
