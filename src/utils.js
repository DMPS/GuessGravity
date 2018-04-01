export function getRandomColor(backgroundColor) {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return (color === backgroundColor ? '#0000ff' : color) //checks that the color of the ball is different to the background
}

export function g(){
    return (9*Math.random())+1
}