import { Ball } from '../model/ball.js'
import { Point } from '../model/point.js'
import { BouncingHandler } from './bouncingHandler.js'

export class DrawingService {

    private _bouncingHandler: BouncingHandler = new BouncingHandler();

    /**
     * Clears the canvas and redraws an array of balls
     * @param balls 
     *          balls to be drawen
     * @param context 
     *          context of the Canvas where the balls would be drawen
     */
    public drawScreen(balls: Array<Ball>, context: CanvasRenderingContext2D): void {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        balls.forEach(ball => {
            this.drawBall(ball, context);
            this._bouncingHandler.calculateNextPosition(ball, new Point(context.canvas.width, context.canvas.height));
        });
    }

    /**
     * Drawing a ball on the canvas
     * @param contex
     *           the context of the canvas where balls will be drawen.
     */
    private drawBall = (ball: Ball, contex: CanvasRenderingContext2D) => {
        contex.beginPath();
        contex.arc(ball.position.x, ball.position.y, ball.radius, 0, 2 * Math.PI);
        contex.closePath();
        contex.fillStyle = ball.color;
        contex.fill();
    }

}