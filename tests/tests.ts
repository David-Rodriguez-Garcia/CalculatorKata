import { generateInput } from './generateInput'
import { addChecker } from './addChecker'

//Generate input
let myArr = generateInput();

let numErrors = 0;// error counter
let counter = 0;// to use as Index
let trace: string;
let txtError = trace = "ADD CHECKER TRACE\n\n";
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
