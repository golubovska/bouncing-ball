import { Point } from "../model/point.js";
import { Ball } from "../model/ball.js";
import { NumberUtils } from "../util/numberUtils.js";
import { ColorUtils } from "../util/colorUtils.js";

export class BallGenerator {

    /**
     * Generates a ball. All values except for the position are randomly generated.  
     * @param point
     *           the position of the center of the ball
     */
    public static generate = (position: Point): Ball => {
        const color: string = ColorUtils.generateRandomColor();
        const angle = NumberUtils.getRandomNumberWithinFange(280, 340);
        const speed = NumberUtils.getRandomNumberWithinFange(4, 8);
        const radius = NumberUtils.getRandomNumberWithinFange(5, 15);
        const radians = angle * (Math.PI / 180);
        const speedX = Math.cos(radians) * speed;
        const speedY = Math.sin(radians) * speed;
        return new Ball(position, radius, color, speedX, speedY);
    };

} 