import { getRandomNumber } from "./randomNumber";
import { generateSeparators } from "./separators";
import { getSeparators } from "../app";

export const generateInput = ():[string, number][] => {
    let myArr: [string, number][] = [['123,  351', 474], ['123,  ', 0], ['123,  &', 0]];
    for (let i: number = 0; i < 100; i++) {
        let hasNegative = false;
        let separatorsTxt = '//' + generateSeparators() + '\n'
        let expectedOutput = 0;
        let fnum = getRandomNumber(-20, 1150);
        if (fnum < 0) hasNegative = true;
        else if (fnum <= 1000) expectedOutput = fnum;
        let input = separatorsTxt + fnum;
        let separators = getSeparators(input);//to make sure it works we pass also the content
        for (let c: number = 0; c < getRandomNumber(1, 100); c++){
            let newNum = getRandomNumber(-20, 1150);
            if (newNum < 0) hasNegative = true;
            else if (newNum > 1000){
                expectedOutput += 0;
            } else {
                expectedOutput += newNum;
            }
            input += separators[Math.floor(getRandomNumber(0, separators.length))] + newNum;
        }
        if (hasNegative) expectedOutput = -1;
        myArr.push([input, expectedOutput])
    }
    return myArr;
}