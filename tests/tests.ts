import { generateInput } from './generateInput'
import { addChecker } from './addChecker'

//Generate input
let myArr = generateInput();

//TO TEST THE EXCEPTIONAL CASE DESCRIBED IN THE 'readme.txt' FILE
myArr.push(["\/\/+_'H)c[\/\/][\/\/\/]\n\
737.9968971872946\/\/\/1023.7948207721224,802.7481724259906H435.9245044605324\n\
713.2142280760398\n\
839.0267657142831)724.3945109135436\/\/\/595.3497955785805)1138.830118128268\/\/\/1080.6433820110078'520.4140967990878)946.1669550325886,826.4061115716631'536.4245791656539'758.661064089682c346.35228736319954,456.8054970282567H385.3659880139232", 9625.25145342032])

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
    if (process.argv[2] == '-trace' || process.argv[2] == '--trace') console.log(trace);
    console.log('ADD CHECKER PASSED CLEAN!')
}
