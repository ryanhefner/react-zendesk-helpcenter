export function filterNumbers(items: any[]): number[];
export function keySum(items: any, key: any): number;
export function keyAvg(items: any, key: any): number;
export function numMin(items: any[]): number;
export function numMax(items: any[]): number;
export function sum(items: any[], offset?: number): number;
export function sumAvg(items: any[], offset?: number): number;
export function rangeAvg(items: any[], rangeMin?: number, rangeMax?: number): number;
export function within(value: any, target: any, offset?: number): boolean;
export function outside(value: any, target: any, offset?: number): boolean;
export function degrees(value: number): number;
export function radians(value: number): number;
export function angle(pointA?: {
    x: number;
    y: number;
}, pointB?: {
    x: number;
    y: number;
}, pointC?: {
    x: number;
    y: number;
}): number;
export function velocity(distance: number, time: number): number;
