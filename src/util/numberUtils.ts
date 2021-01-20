export class NumberUtils {

    /**
     * Generates random number in range from 0 to given max value 
     * @param max 
     *      the upper limit of the range
     */
    public static getRandomNumber = (max: number): number => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    /**
     * Generates random number in range from provided min to max value 
     * @param min 
     *      the lower limit of the range
     * @param max 
     *      the upper limit of the range
     */
    public static getRandomNumberWithinFange = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

}