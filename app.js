var app = new Vue({
    el: '#app',
    data: {
        programas: [{
                key: "/radiopixel/",
                name: "",
                biog: "",
                picture: "",
            },
            {
                key: "/wiredUK/",
                name: "",
                biog: "",
                picture: "",
            },
            {
                key: "/guardianscience/",
                name: "",
                biog: "",
                picture: "",
            },
            {
                key: "/nypr/",
                name: "",
                biog: "",
                picture: "",
            },
            {
                key: "/CheckpointRadio/",
                name: "",
                biog: "",
                picture: "",
            },
            {
                key: "/ConvergenceLondon/",
                name: "",
                biog: "",
                picture: "",
            },
            {
                key: "/OnRadioFRIKI/",
                name: "",
                biog: "",
                picture: "",
            }
        ]
    }
})
app.programas.forEach(function(programa, index) {
    $.get("https://api.mixcloud.com" + programa.key, function(res) {
        let json = JSON.parse(res);
        console.log(json);
        let programa = app.programas[index];
        programa.name = json.name;
        console.log(programa.name);
        programa.biog = json.biog;
        programa.picture = json.pictures.large;
        console.log(programa);
    });
});





function play() {
    var rep = document.getElementById('audio');
    if (rep.paused) {
        rep.play();
        $('#boton_play').removeClass('glifo_pausa');
        $('#boton_play').addClass('glifo_play');
    } else {
        rep.pause();
        $('#boton_play').removeClass('glifo_play');
        $('#boton_play').addClass('glifo_pausa');

    }
}
/*
function test() {
    $.get("https://api.mixcloud.com", function(res) {
            let i = 0;
            res.data.forEach((element, i) => {
                $.get('https://api.mixcloud.com' + element.key + 'embed-json/', function(res) {

                    app.programas.push({
                        'i': i,
                        'html': JSON.parse(res).html
                    });
                    if (i == 20) {
                        app.programas.sort((a, b) => {
                            return a.i - b.i
                        });
                    }
                });
                i++;
            });


        }, 'json');
}
*/