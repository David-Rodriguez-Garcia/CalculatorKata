import { StringCalculator, getSeparators } from "./app.js"
//TEST CHECKER
type AddCheckerFunc = (input: string, expectedOutput: number, index: number) => [string, boolean];

const sc: StringCalculator = new StringCalculator()

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

//should we accept other ascii characters? - should we pass numbers? - We are assuming that only the characters between 32 - 47 && 58 - 126 will be passed
function generateSeparators(): string {
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

const generateInput = ():[string, number][] => {
    let myArr: [string, number][] = [['123,  351', 474], ['123,  ', 0], ['123,  &', 0]];
    for (let i: number = 0; i < 100; i++) {
        let separatorsTxt = '//' + generateSeparators() + '\n'
        let fnum = getRandomNumber(-90000000000, 90000000000);
        let input = separatorsTxt + fnum;
        let expectedOutput = fnum;
        let separators = getSeparators(input);//to make sure it works we pass also the content
        for (let c: number = 0; c < getRandomNumber(1, 100); c++){
            let newNum = getRandomNumber(-90000000000, 90000000000);
            input += separators[Math.floor(getRandomNumber(0, separators.length))] + newNum;
            expectedOutput += newNum;
        }
        myArr.push([input, expectedOutput])
    }
    return myArr;
}

let myArr = generateInput();

let numErrors = 0;
let counter = 0;
let trace = "ADD CHECKER TRACE\n\n";
let txtError = "ADD CHECKER TRACE\n\n";
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
    //console.log(trace);
    console.log('ADD CHECKER PASSED CLEAN!')
}
