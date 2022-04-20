class StringCalculator {
    Add(nums: string): number{
        let arr = nums.split(',');
        //check that we got two numbers, and that both of those numbers are smaller than 15 characters long (number is max 16 digits)
        if (arr.length == 2 && arr[0].length < 15 && arr[1].length < 15){
            let numAr = [parseFloat(arr[0]), parseFloat(arr[1])]
            //check that they are both numbers
            if (!isNaN(numAr[0]) && !isNaN(numAr[1])){
                //should throw errors -> return (numAr[0] + numAr[1] + 1234567890123456789012345678901234567890);
                return (numAr[0] + numAr[1]);
            }
        }
        return 0;
    };
}

//TEST PREPARATION
type AddCheckerFunc = (input: string, expectedOutput: number, index: number) => [string, boolean];

const sc: StringCalculator = new StringCalculator()

const addChecker: AddCheckerFunc = (input, expectedOutput, index) => {
    let success = true;
    let realOutput = sc.Add(input);
    let txt: string;
    if (realOutput === expectedOutput){
        txt = '\nTest n-' + index + ' CORRECT';
    } else {
        txt = '\nTest n-' + index + ' ERROR';
        numErrors++;
        success = false;
    }
    txt += 'For input: ' + input + '\nExpected output: ' + expectedOutput + '\nCurrent output: ' + realOutput + '\n';
    return [txt, success];
}

//TEST GENERATION
const myArr: [string, number][] = [['', 0], ['1,2', 3], ['13475,0', 13475], ['0,13475', 13475], ['-13475, 3', -13472], ['9007199254740992,0', 0], ['4, 9007199254740990', 0], ['-9007199254740991, - 4', 0], ['-3, -5', -8], ['true', 0]]
let counter: number = 0;
let numErrors: number = 0;
let trace: string = "ADD CHECKER TRACE\n\n";
for (let [input, output] of myArr){
    let [txt, success] = addChecker(input, output, counter)
    if (!success){
        numErrors++;
    }
    trace = trace.concat('\n', txt)
    counter++;
}
if (numErrors != 0) {
    console.log(trace);
    console.log('NUM. ERRORS - ' + numErrors);
} else {
    console.log('ADD CHECKER PASSED CLEAN!')
}
