import { StringCalculator } from "../app";

type AddCheckerFunc = (input: string, expectedOutput: number, index: number) => [string, boolean];

const sc: StringCalculator = new StringCalculator()

//function to check the add method
export const addChecker: AddCheckerFunc = (input, expectedOutput, index) => {
    let txt: string;
    let success = true;
    let realOutput = sc.Add(input);
    if (realOutput === expectedOutput){
        txt = '\nTest n-' + index + ' CORRECT';
    } else {
        txt = '\nTest n-' + index + ' ERROR';
        success = false;
    }
    txt += '  -- For input: ' + input + ' -- Expected output: ' + expectedOutput + ' -- Current output: ' + realOutput + '\n';
    return [txt, success];
}