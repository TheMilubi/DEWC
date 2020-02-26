var logogrifo = {}
$(() => {
    start()
    $('#inst span').click((e) => {
        $(e.currentTarget).parent().hide()
    })
});
function start() {
    $.ajax({
        method: "get",
        url: "logogrifo.json",
        dataType: "json",
        success: function (response) {
            logogrifo = new Logogrifo(response)
            logogrifo.mostrar()
            $('span').click((e) => {
                logogrifo.numero = $(e.currentTarget).attr('name')
                addEventListener('keydown', keyDown)
            })
        }
    });
}
function keyDown(e) {
    logogrifo.letra = (/^[a-zA-ZñÑ]{1}$/.test(e.key)) ? String(e.key).toUpperCase() : logogrifo.numero
    removeEventListener('keydown', keyDown)
    logogrifo.mostrarLetra()
}
class Logogrifo {
    //principal = ""
    pistaLogogrifo = ""
    palabras = []
    letras = []
    maxLenght = 0
    letra = ''
    numero = -1
    constructor(lista = []) {
        if (lista.length > 0) {
            let r = Math.floor(Math.random() * lista.length)
            this.palabras = lista[r].slice(1)
            //this.principal = lista[r][0].palabra
            this.pistaLogogrifo = lista[r][0].pista
            for (let p of this.palabras) {
                if (p.palabra.length > this.maxLenght) {
                    this.maxLenght = p.palabra.length
                }
                for (let l of p.palabra.split('')) {
                    if (!(this.letras.indexOf(l) >= 0)) {
                        this.letras.push(l)
                    }

                }

            }
        }
        //console.log(this)
    }
    /**
     * Muestra el logogrifo en las etiquetas con IDs 'principal' y 'palabras'.
     */
    mostrar() {

        $('#fin').hide()
        $('#pistas, #palabras, #pistaLogogrifo').html('')
        $('#pistaLogogrifo').html("Pista principal: " + this.pistaLogogrifo)

        for (let i = 0; i < this.palabras.length; i++) {
            let palabra = this.palabras[i].palabra.split('');
            let pista = this.palabras[i].pista;
            let div = `<div title='${pista}'>`;
            $('#pistas').html($('#pistas').html() + `<div>${pista}</div>`)
            for (let j = 0; j < palabra.length; j++) {
                let n = this.letras.indexOf(palabra[j]);
                div += `<span class='number' name='${n}'>${n}</span>`;
            }
            div = div + '</div>';
            $('#palabras').html($('#palabras').html() + div)
        }
        $('#palabras span').css('width', `calc(100% / ${this.maxLenght})`)
    }
    /**
     * Muestra letra en el lugar del número.
     */
    mostrarLetra() {

        $(`[name=${this.numero}]`).html(this.letra)
        this.comprobar()
    }
    comprobar() {
        var /* esPrincipal = false,  */sonPalabras = true
        /* var pPpal = "" */
        /*  $('div span:first-child').each((i, target) => {
            pPpal += $(target).html()
        })
        esPrincipal = (pPpal == this.principal) */
        this.letras.forEach((l, i) => {
            //console.log($(`[name=${i}]`).html())
            sonPalabras = sonPalabras && ($(`[name=${i}]`).html().toLowerCase() == l)
        })
        if (/* esPrincipal &&  */sonPalabras) {
            this.fin()
        }
    }
    /**
     * Mustra el mensaje de fin y un boton para comenzar otro logogrifo
     */
    fin() {
        //$('#pistas, #palabras, #pistaLogogrifo').hide()
        $('#fin').html('<p>¡¡¡FIN DEL JUEGO!!!</p><button onclick="start()">Empezar nuevo logogrifo</button>').show()
    }
}