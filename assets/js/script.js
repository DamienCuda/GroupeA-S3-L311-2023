window.addEventListener("DOMContentLoaded", (event) => {
    let is_run = "true";

    init();

    // On initialise le timer
    function init(){

       // Lors du clique sur le bouton pause ou play 
       document.querySelector('.button').addEventListener('click', (event) => {
            is_run = !is_run;
            // Si le bouton a la classe "pause" on la supprime
            if ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) {
                document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class').replace(' pause', ''));
            } else {
                // Sinon on l'ajoute
                document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class') + ' pause');
            }
       });
            
        setInterval(function () {
        if (is_run) {
            // On créer un objet date avec la date et l'heure actuelle
            let oDate = new Date();
            // On affiche dans notre DOM au different ID la date actuelle en décomposée. Mais avant on la passe dans une fonction pour ajouté des 0 si le champ est inféreieur à 10.            
            document.querySelector('#hours').innerHTML = adjustTimer(oDate.getHours());
            document.querySelector('#minutes').innerHTML = adjustTimer(oDate.getMinutes());
            document.querySelector('#seconds').innerHTML = adjustTimer(oDate.getSeconds());
            
            // On change la couleur du background par une couleur random grâce à la fonction "randomHexColor()"
            document.querySelector('body').style.background = randomHexColor(document.querySelector('#hours').innerHTML, document.querySelector('#minutes').innerHTML, document.querySelector('#seconds').innerHTML);
        }
        }, 1000);
    }

    // Fonction qui ajoute des 0
    function adjustTimer(timer){
       return (timer < 10 ? '0'+timer : timer);
    }

    // Fonction qui créer des couleurs random pour le body
    function randomHexColor(x, y, z){
        return "rgb(" + Math.floor(x/100 * 256) + "," + Math.floor(y/100 * 256) + "," + Math.floor(z/100 * 256) + ")";
    }
});