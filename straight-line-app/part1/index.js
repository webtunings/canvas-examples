var canvas,
    context;

function dragStart(event) {
    console.log('dragStart');
}

function drag(event) {
    console.log('drag');

}

function dragStop(event) {
    console.log('dragStop');

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