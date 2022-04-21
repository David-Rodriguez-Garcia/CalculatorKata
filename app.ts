export class StringCalculator {
    Add(nums: string): number{
        let arr = nums.split(',');
        //check that we got two numbers, and that both of those numbers are smaller than 15 characters long (number is max 16 digits)
        if (arr.length > 1 && arr.length <= 80){
            //check their length && that they are numbers && a security for max 80 elements of lenght 14-> Why? -> avoid bugs. Max number 16 digits
            if (arr.every((elem) => !isNaN(parseFloat(elem)))){                
                let numAr: number[] = arr.map(elem => parseFloat(elem));
                let result = numAr.reduce((acumulator, elem) => acumulator + elem, 0);
                return (result);
            }
        }
        return 0;
    };
}

