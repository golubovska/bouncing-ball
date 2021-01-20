import { Ball } from './model/ball.js'
import { Point } from './model/point.js'
import { DrawingService } from './service/drawingService.js'
import { BallGenerator } from './service/ballGenerator.js';

let balls: Array<Ball> = [];
const drawingService: DrawingService = new DrawingService();

window.onload = () => {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>window.document.getElementById("bouncingBallCanvas")!;
    canvas.addEventListener("click", (evt) => {
        balls.push(BallGenerator.generate(getMousePosition(evt, canvas)));
    });

    loadCanvas(canvas.getContext("2d")!);
};

const getMousePosition = (evt: MouseEvent, canvas: HTMLCanvasElement): Point => {
    var rect = canvas.getBoundingClientRect();
    return new Point(evt.clientX - rect.left, evt.clientY - rect.top);
};

const loadCanvas = (ctx: CanvasRenderingContext2D) => {
    window.setTimeout(() => { loadCanvas(ctx) }, 20);

    drawingService.drawScreen(balls, ctx);
};