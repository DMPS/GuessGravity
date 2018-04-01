import {getRandomColor} from "./utils.js";

export default function (x, y) {
    this.x = x;
    this.y = y;
    this.color = getRandomColor('#FFFFF0');
    this.v_x = 0;
    this.v_y = 0;
}