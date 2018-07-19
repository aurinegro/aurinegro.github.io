function play() {
    var rep = document.getElementById('audio');
    if (rep.paused) {
        rep.play();
        $("#boton-play").removeClass('fa-play');
        $("#boton-play").addClass('fa-pause');
    } else {
        rep.pause();
        $("#boton-play").removeClass('fa-pause');
        $("#boton-play").addClass('fa-play');

    }
}

$(document).ready(function() {

})