export function getSeparators(txt: string): string[] {
    let ar = [',', '\n'];//initial separators
    if (txt[0] == '/' && txt[1] === '/'){
        let newSep = Array.from(txt.split('\n', 2)[0]);//the new separators array
        newSep.splice(0,2);//take out the initial //
        ar = ar.concat(newSep);
        //now ar is clean with only the separators as an array list
        //console.log('SEPARATORS ' + ar[0]);
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
                let temNumArr = numString.split(separator);//temporary numeric array
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
                throw new RangeError(`${negativeArray}`);
            }
            if (allNumbers) {
                let result = numAr.reduce((acumulator, elem) => acumulator + elem, 0);
                return (result);
            }
        }
        return 0;
    };
}
