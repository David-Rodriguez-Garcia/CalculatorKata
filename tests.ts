import {StringCalculator} from "./app.js"
//TEST CHECKER
type AddCheckerFunc = (input: string, expectedOutput: number, index: number) => [string, boolean];

const sc: StringCalculator = new StringCalculator()

//returns true if no errors, false if errors
const addChecker: AddCheckerFunc = (input, expectedOutput, index) => {
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


//GENERATE INPUT LOGIC & IMPLEMENTATION

function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max-min) + min;
}

let myArr: [string, number][] = [['123,  351', 474], ['123,  ', 0], ['123,  &', 0]];
const generateInput = () => {
    for (let i: number = 0; i < 100; i++) {
        let fnum = getRandomNumber(-90000000000, 90000000000);
        let input = `${fnum}`;
        let expectedOutput = fnum;
        for (let c: number = 0; c < getRandomNumber(1, 100); c++){
            let newNum = getRandomNumber(-90000000000, 90000000000);
            input += ',' + newNum;
            expectedOutput += newNum;
        }
        myArr.push([input, expectedOutput])
    }
}

generateInput();

//const myArr: [string, number][] = [['', 0], ['1,2', 3], ['13475,0', 13475], ['0,13475', 13475], ['-13475, 3', -13472], ['9007199254740992,0', 0], ['4, 9007199254740990', 0], ['-9007199254740991, - 4', 0], ['-3, -5', -8], ['true', 0]]
let numErrors: number = 0;
let counter: number = 0;
let trace: string = "ADD CHECKER TRACE\n\n";
let txtError: string = "ADD CHECKER TRACE\n\n";
for (let [input, output] of myArr){
    let [txt, success] = addChecker(input, output, counter)
    if (!success){
        numErrors++;
        txtError += '\n' + txt;
    }
    trace = trace.concat('\n', txt)
    counter++;
}

if (numErrors != 0) {
    console.log(txtError);
    console.log('NUM. ERRORS - ' + numErrors);
} else {
    console.log(trace);
    console.log('ADD CHECKER PASSED CLEAN!')
}
