import { generateInput } from './generateInput'
import { addChecker } from './addChecker'

//Generate input
let myArr = generateInput();

let numErrors = 0;// error counter
let counter = 0;// to use as Index
let trace: string;
let txtError = trace = "ADD CHECKER TRACE\n\n";
for (let [input, output] of myArr) {
    try {
        let [txt, success] = addChecker(input, output, counter)
        if (!success) {
            numErrors++
            txtError = txtError.concat('\n', txt)
        }
        trace = trace.concat('\n', txt)
    } catch (err) {
        trace = trace.concat('\n', err)
        //-1 will be returned by all the tests that contain a negative in it
        if ( output != -1 ) {
            txtError = txtError.concat('\n', err)
            numErrors++;
        }
    }
    counter++;
}

if (numErrors != 0) {
    console.log(txtError);
    console.log('NUM. ERRORS - ' + numErrors);
} else {
    //console.log(trace);
    console.log('ADD CHECKER PASSED CLEAN!')
}
