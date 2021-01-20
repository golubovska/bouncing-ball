import { Ball } from "../model/ball.js";
import { Point } from "../model/point.js";

export class BouncingHandler {

    /**
     * Calculates the new possitio of a ball
     * @param ball 
     *          the ball which next position will be calculated
     * @param canvasDimensions 
     *          position of the bottom right corner of the canvas
     */
    public calculateNextPosition(ball: Ball, canvasDimensions: Point): void {
        ball.speedY += ball.gravity;
        let ballX = ball.position.x;
        let ballY = ball.position.y;

        if ((ball.position.y + ball.radius) >= canvasDimensions.y) {
            ball.speedY = -ball.speedY * ball.elasticity;
            ballY = canvasDimensions.y - ball.radius;
        }

        ball.position = new Point(ballX + ball.speedX, ballY + ball.speedY);
    }

}