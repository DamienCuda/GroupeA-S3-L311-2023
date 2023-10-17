window.addEventListener("DOMContentLoaded", (event) => {
    /* is_run n'était pas un boléen alors que son utilisation lui demande de l'être */
    let is_run = true;

    init();

    function init() {
        /* L'écouteur 'click' était mal écrit et il manquait l'accolade de la fonction */
        document.querySelector('.button').addEventListener('click', (event) => {
            is_run = !is_run;
                /* Une faute de frappe sur un document */
                ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) ? document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class').replace(' pause', '')) : document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class') + ' pause');
        })
        /* La fonction setInterval était mal écrite */
        setInterval(function () {
            if (is_run) {
                /* Non obligatoire : la date peut être une constante */
                const oDate = new Date();
                document.querySelector('#hours').innerHTML = adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML = adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML = adjustTimer(oDate.getSeconds());

                document.querySelector('body').style.background = randomHexColor(document.querySelector('#hours').innerHTML, document.querySelector('#minutes').innerHTML, document.querySelector('#seconds').innerHTML);

            }
            /* Il manquait la parenthèse de fermeture de la fonction setInterval */
        }, 1000);
    }

    function adjustTimer(timer) {
        return (timer < 10 ? '0' + timer : timer);
    }
    /* Il manquait z */
    function randomHexColor(x, y, z) {
        return "rgb(" + Math.floor(x / 100 * 256) + "," + Math.floor(y / 100 * 256) + "," + Math.floor(z / 100 * 256) + ")";
    }
});