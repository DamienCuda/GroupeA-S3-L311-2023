window.addEventListener("DOMContentLoaded", (event) => {
    init();

    function init(){
       var is_run = true;
       document.querySelector('.button').addEventListener('click', (event) => { // <-- Correctif: "clic" au lieu de "click"
            // Correctif: les inversions du type !is_run ne fonctionnent pas
            if(is_run) is_run = false;
            else is_run = true;
            ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) ? document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class').replace(' pause', '')) : document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class')+' pause');
        });

        // Correctif: Anciennement setTimeInterval
        setInterval(function(){
            if(is_run){
                let oDate = new Date();
                document.querySelector('#hours').innerHTML = adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML = adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML = adjustTimer( oDate.getSeconds());

                document.querySelector('body').style.background = randomHexColor(document.querySelector('#hours').innerHTML, document.querySelector('#minutes').innerHTML, document.querySelector('#seconds').innerHTML);
                
            }
        }, 1000); // Correctif: la parenthèse du setInterval n'était jamais fermée
    }

    function adjustTimer(timer){
        return (timer < 10 ? '0'+timer : timer);
    }

    function randomHexColor(x, y, z){
        return "rgb(" + Math.floor(x/100 * 256) + "," + Math.floor(y/100 * 256) + "," + Math.floor(z/100 * 256) + ")";
    }
});