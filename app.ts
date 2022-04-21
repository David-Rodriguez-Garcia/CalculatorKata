export class StringCalculator {
    Add(nums: string): number{
        let arr = nums.split(/[\n,]/);
        if (arr.length > 1 && arr.length <= 80){
            if (arr.every((elem) => !isNaN(parseFloat(elem)))){                
                let numAr: number[] = arr.map(elem => parseFloat(elem));
                let result = numAr.reduce((acumulator, elem) => acumulator + elem, 0);
                return (result);
            }
        }
        return 0;
    };
}
