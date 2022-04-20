

/*TODO - The input seems to be too large for us to handle it. We must check the values we are passing or the conditionals */
export class StringCalculator {
    Add(nums: string): number{
        let arr = nums.split(',');
        //check that we got two numbers, and that both of those numbers are smaller than 15 characters long (number is max 16 digits)
        if (arr.length > 1 && arr.length <= 80){
            //check their length && that they are numbers && a security for max 80 elements of lenght 14-> Why? -> avoid bugs. Max number 16 digits
            if (arr.every((elem) => elem.length < 14 && !isNaN(parseFloat(elem)))){
                
                let numAr: number[] = arr.map(elem => parseFloat(elem[0]));
                let result = numAr.reduce((acumulator, elem) => acumulator + elem, 0);
                console.log('CLASS OUTPUT: ', result, ' - Class Input - ', numAr, ' ---- ', arr)
                return (result);
            }
        }
        return 0;
    };
}

