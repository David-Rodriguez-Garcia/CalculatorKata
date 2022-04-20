//TEST CHECKER
type AddCheckerFunc = (input: string, expectedOutput: number, index: number) => boolean;

const sc: StringCalculator = new StringCalculator()

let trace: string = "ADD CHECKER TRACE\n\n";
//returns true if no errors, false if errors
const addChecker: AddCheckerFunc = (input, expectedOutput, index) => {
    let error: boolean = false;
    let realOutput = sc.Add(input);
    let txt: string;
    if (realOutput === expectedOutput){
        txt = '\nTest n-' + index + ' CORRECT';
    } else {
        txt = '\nTest n-' + index + ' ERROR';
        error = true;
    }
    txt += 'For input: ' + input + '\nExpected output: ' + expectedOutput + '\nCurrent output: ' + realOutput + '\n';
    trace.concat('\n', txt)
    return !error;
}


//GENERATE INPUT LOGIC & IMPLEMENTATION

function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max-min) + min;
}

let myArr: [string, number][] = [['123,  351', 474], ['123,  ', 474], ['123,  &', 0]];
const generateInput = () => {
    for (let i: number = 0; i < 100; i++) {
        let fnum = getRandomNumber(-9000000000000000, 9000000000000000);
        let snum = getRandomNumber(-9000000000000000, 9000000000000000);

        myArr.push([fnum + ',' + snum, fnum + snum])
    }
}

//const myArr: [string, number][] = [['', 0], ['1,2', 3], ['13475,0', 13475], ['0,13475', 13475], ['-13475, 3', -13472], ['9007199254740992,0', 0], ['4, 9007199254740990', 0], ['-9007199254740991, - 4', 0], ['-3, -5', -8], ['true', 0]]
let numErrors: number = 0;
let counter: number = 0;
for (let [input, output] of myArr){
    if (!addChecker(input, output, counter)){
        numErrors++;
    }
    counter++;
}

if (numErrors != 0) {
    console.log(trace);
    console.log('NUM. ERRORS - ' + numErrors);
} else {
    console.log('ADD CHECKER PASSED CLEAN!')
}
