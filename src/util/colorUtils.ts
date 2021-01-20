import { NumberUtils } from "./numberUtils.js";

export class ColorUtils {

    public static generateRandomColor = (): string => {
        return `rgb(${NumberUtils.getRandomNumber(255)}, ${NumberUtils.getRandomNumber(255)}, ${NumberUtils.getRandomNumber(255)})`;
    }

}