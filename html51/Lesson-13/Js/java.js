var canvas, ctx;
var video;

function init() {
    canvas = document.getElementById('canvas1')
    ctx2 = canvas.getContext('2d');
    video = document.getElementById('myVideo')


    ctx2.fillRect(20, 10, 50, 70);
}

function snapshot() {


    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}

function onSuccess(stream) {

    var output = document.getElementById('myVideo');

    output.src = window.URL.createObjectURL(stream);

}

function onSuccess(stream) {

    var output = document.getElementById('myVideo');

    output.src = window.URL.createObjectURL(stream);

}
if (navigator.getUserMedia = (navigator.getUserMedia ||

        navigator.webkitGetUserMedia ||

        navigator.mozGetUserMedia ||

        navigator.msGetUserMedia))

{

    navigator.getUserMedia({ video: true }, onSuccess, onError);

} else

{

    alert("getUserMedia API not supported");

}