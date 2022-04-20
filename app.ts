class StringCalculator {
    Add(nums: string): number{
        let arr = nums.split(',');
        //check that we got two numbers, and that both of those numbers are smaller than 15 characters long (number is max 16 digits)
        if (arr.length > 1 && arr.length <= 80){
            //check their length && that they are numbers && a security for max 80 elements of lenght 14-> Why? -> avoid bugs. Max number 16 digits
            if (arr.every((elem) => elem[0].length < 14 && !isNaN(parseFloat(elem[0])))){
                
                let numAr: number[] = arr.map(elem => numAr.push(parseFloat(elem[0])));
    
                //check that they are both numbers
                if (!isNaN(numAr[0]) && !isNaN(numAr[1])){
                    //should throw errors -> return (numAr[0] + numAr[1] + 1234567890123456789012345678901234567890);
                    return (numAr[0] + numAr[1]);
                }
            }
        }
        return 0;
    };
}

