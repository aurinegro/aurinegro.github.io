$(document).ready(function() {

    var app = new Vue({
        el: '#app',
        data: {
            programas: []
        }
    })

    $.get("https://api.mixcloud.com/radiopixel/cloudcasts/", function(res) {


        let i = 0;
        JSON.parse(res).data.forEach(element => {
            $.get('https://api.mixcloud.com' + element.key + 'embed-json/', function(res) {

                app.programas.push({
                    'i': i,
                    'html': JSON.parse(res).html
                });
                if (i == 20) {
                    app.programas.sort((a, b) => a.i < b.i);
                }
            });
            i++;
        });

    })


})