import { Point } from './point.js'

export class Ball {

    private _position: Point;
    private _radius: number;
    private _color: string;
    private _speedX: number;
    private _speedY: number;
    private _gravity: number;
    private _elasticity: number;

    constructor(position: Point, radius: number, color: string, speedX: number, speedY: number, gravity: number = 0.1, elasticity: number = 0.5) {
        this._position = position;
        this._radius = radius;
        this._color = color;

        this._gravity = gravity;
        this._elasticity = elasticity;

        this._speedX = speedX;
        this._speedY = speedY;
    }

    public get position(): Point {
        return this._position;
    }

    public set position(position: Point) {
        this._position = position;
    }

    public get color(): string {
        return this._color;
    }

    public get elasticity(): number {
        return this._elasticity;
    }

    public get radius(): number {
        return this._radius;
    }

    public get gravity(): number {
        return this._gravity;
    }

    public get speedX(): number {
        return this._speedX;
    }

    public set speedX(speedX: number) {
        this._speedX = speedX;
    }

    public get speedY(): number {
        return this._speedY;
    }

    public set speedY(speedY: number) {
        this._speedY = speedY;
    }

}