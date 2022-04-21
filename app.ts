export function getSeparators(txt: string): string[] {
    let ar = [',', '\n'];//initial separators
    if (txt[0] == '/' && txt[1] === '/'){
        let fullStrSep = txt.split('\n', 2)[0];//string with all the separators
        //extract all the [] multiple separators and add them to the array
        fullStrSep = fullStrSep.slice(2);// without the initial '//'
        while (fullStrSep.indexOf('[') != -1 && fullStrSep.indexOf(']') != -1) {
            let fIndex = fullStrSep.indexOf('[');
            let sIndex = fullStrSep.indexOf(']');

            //we are setting it to fIndex +1 && sIndex so that it doesn't take the '[' ']' characters
            let compoundedSeparator = fullStrSep.substring(fIndex + 1, sIndex);

            //add it to the list of separators if not empty string -> case: []
            if (compoundedSeparator != '') ar.push(compoundedSeparator);

            //delete from the string
            fullStrSep = fullStrSep.substring(0, fIndex) + fullStrSep.substring(sIndex + 1);
        }

        let newSep = Array.from(fullStrSep);//the new separators array
        newSep.splice(0,2);//take out the initial //
        ar = ar.concat(newSep);
        //we sort the elements for the error we described in the notes
        ar = ar.sort((a, b) => b.length - a.length);
    }
    return ar;
}

export class StringCalculator {
    Add(nums: string): number{
        let separators = getSeparators(nums);
        let arr: string[];
        if (nums[0] == '/' && nums[1] == '/'){
            //number string without the initial separators
            let numArr: string[] = nums.split('\n');
            numArr.shift();//delete the first element
            let numString = numArr.join(',');//join the array to create a string
            for (let separator of separators) {
                let temNumArr = numString.split(separator);//temporary numeric array (numbers are as strings here)
                numString = temNumArr.join(',');
            }
            arr = numString.split(',');
        } else {
            arr = nums.split(/[\n,]/);
        }
        if (arr.length > 1 && arr.length <= 80){
            let allNumbers = true;
            let negativeArray: number [] = [];
            let numAr: number[] = arr.map(elem => {
                //this solves (at least temporarily) the problem of empty strings. Empty strings may appear when having two separators together
                if (elem === ''){
                    elem = '0'
                }
                let val = parseFloat(elem);
                if (isNaN(val)) {
                    allNumbers = false;
                }
                else if (val < 0) {
                    negativeArray.push(val);
                }
                return val;
            });
            if (negativeArray.length > 0){
                throw new RangeError(`negatives not allowed: ${negativeArray}`);
            }
            if (allNumbers) {
                let result = numAr.reduce((acumulator, elem) => {
                    if (elem > 1000) return acumulator;
                    return (acumulator + elem);
                }, 0);
                return (result);
            }
        }
        return 0;
    };
}
