class Carta {
    numero = ''
    palo = ''
    url = ''
    dorso = ''
    constructor(numero, palo, url) {
        this.numero = numero
        this.palo = palo
        this.url = url
        this.dorso = 'Naipes/dorso.svg'
    }
}
class Baraja {
    cartas = []
    constructor() {
        for (let p of ['diamantes', 'picas', 'corazones', 'treboles']) {
            for (let n of ['j', 'q', 'k']) {
                this.cartas.push(new Carta(n, p, `Naipes/${n}-${p}.svg`))
            }
        }
    }
}
class Juego {
    cartas = []
    nCartas = []
    parejasEncontradas = 0
    constructor(n = 2) {
        if (n >= 2 && n % 2 == 0) {
            for (let i = 0; i < n; i++) {
                this.cartas = this.cartas.concat(new Baraja().cartas)
            }
            this.cartas.sort(() => {
                return 0.5 - Math.random()
            })

        }
    }

    /**
     * Muestra las cartas del juegos por su dorsal.
     */
    mostrar() {
        let i = 0
        for (let carta of this.cartas) {
            $('#tablero').html($('#tablero').html() + `<img class='enabled' name='${i}' src='${carta.dorso}'></img>`)
            i++
        }
    }

    /**
     * Le da la vuelta a la carta y la prepara para ser comparada.
     * @param {string} i Indice de la carta dentro del juego.
     */
    click(i) {
        $($('img[name]')[i]).attr('src', this.cartas[i].url)
        if (this.nCartas.length < 2) {
            this.nCartas.push(i)
        }
        else {
            $(`[name=${i}]`)[0].className = 'enabled'
        }

        if (this.nCartas.length == 2) {
            if (this.nCartas[0] == this.nCartas[1]) {
                this.nCartas.splice(1, 1)
            } else {
                this.comparar(this.nCartas[0], this.nCartas[1])
            }
        }
    }

    /**
     * Compara dos carta clicadas.
     * @param {number} a Posición del primer elemento a comparar en this.cartas[]
     * @param {number} a Posición del segundo elemento a comparar en this.cartas[]
     */
    comparar(a, b) {
        let carta1 = this.cartas[a]
        let carta2 = this.cartas[b]
        if (carta1.url == carta2.url) {
            this.parejasEncontradas++
            console.log(this.parejasEncontradas)
            this.comprobarFin()
        }
        else {
            setTimeout(() => {

                $(`[name=${a}]`)[0].className = 'enabled'
                $(`[name=${b}]`)[0].className = 'enabled'
                $(`[name=${a}]`).attr('src', 'Naipes/dorso.svg')
                $(`[name=${b}]`).attr('src', 'Naipes/dorso.svg')

            }, 1000)
        }
        this.nCartas = []
    }
    /**
     * Comprueba si han encontrado todas las cartas y muestra mensaje de fin del juego.
     */
    comprobarFin() {
        if (this.parejasEncontradas == (this.cartas.length / 2)) {
            $('#tablero').hide()
            $('#tablero').html('')
            $('#fin').html('¡¡¡FIN DEL JUEGO!!!')
            $('#fin').show()
            $('#menu').show()
        }
    }
}
$(document).ready(() => {
    $('#empezar').click(()=>{
        if($('#numero').val() % 2 == 0 && $('#numero').val() > 0){
            $('#fin').hide()
            $('#menu').hide()
            $('#tablero').show()
            var juego = new Juego($('#numero').val())
            juego.mostrar()
            $('img[name]').each((indice, elem) => {
                elem.onclick = () => {
                    
                    if (elem.className == 'enabled') {
                        juego.click(indice)
                        elem.className = 'disabled'
                    }
                }
                
            })
        }
    })
})