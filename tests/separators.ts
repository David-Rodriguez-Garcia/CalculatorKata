import { getRandomNumber } from "./randomNumber";
//should we accept other ascii characters? - should we pass numbers? - We are assuming that only the characters between 32 - 47 && 58 - 126 will be passed
export function generateSeparators(): string {
    let separators = '';
    for (let c = 0; c < getRandomNumber(1,10); c++){
        if (c % 2 === 0){
            let num = Math.floor(getRandomNumber(32, 47));
            if (num === 45 || num == 46) num = 47; //not containing periods nor '-'
            separators += String.fromCharCode(num);
        } else {
            separators += String.fromCharCode(Math.floor(getRandomNumber(58, 126)));
        }
    }
    return separators;
}