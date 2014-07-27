var canvas,
    context;


function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY - canvas.getBoundingClientRect().top;

    return {x: x, y: y};
}

function dragStart(event) {
    console.log(getCanvasCoordinates(event));
}

function drag(event) {
    console.log(getCanvasCoordinates(event));

}

function dragStop(event) {
    console.log(getCanvasCoordinates(event));

}

function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');
    context.strokeStyle = 'purple';
    context.lineWidth = 6;
    context.lineCap = 'round';

    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
}

window.addEventListener('load', init, false);