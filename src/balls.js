import {
    getRandomColor,
    g
} from './utils'
import Ball from "./ball.model";
import Swal from 'sweetalert2'
import './styles/styles.scss';

// get a refrence to the canvas and its context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let answer = document.getElementById('answer')

// The gravitational constant for the current game
// 1<g<10
const G = g()
console.log(`The Answer is.... ${G}`)

var balls = [];

// save the starting time (used to calc elapsed time)
let startTime = Date.now();

animate();

canvas.addEventListener('click', function (e) {
    balls.push(new Ball(e.clientY, e.clientX))
}, false);

answer.addEventListener('input',function(e){
    if(Math.round(100*G)/100===+e.target.value) Swal('Good job!','You calculated the gravitational constant of this webpage!','success')
})

function animate() {
    // request another animation frame
    requestAnimationFrame(animate);

    // clear the canvas so all balls can be redrawn in new positions
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // move each object down the canvas
    for (var i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.v_y += G / 60
        ball.y += ball.v_y;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, 8, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = ball.color;
        ctx.fill();
    }
}