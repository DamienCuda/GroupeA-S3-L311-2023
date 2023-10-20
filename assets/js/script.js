window.addEventListener("DOMContentLoaded", (event) => {
  //ERREUR : true sous forme de string au lieu de bool
  // Variable de vérification d'état Play/Pause
  let is_run = true;

  init();

  //ERREUR : Mauvaise indentation, clic au lieu de click, acollades manquantes pour la fonction passage d'arguments inutiles
  // Fonction de gestion du play/pause via la class pause
  function init() {
    document.querySelector(".button").addEventListener("click",() => {
        is_run = !is_run;
        // Ajout ou retrait de la class pause au clic. Simplification de l'opérateur ternaire
        ((document.querySelector(".button").classList.contains("pause")))
        ? document.querySelector(".button").setAttribute("class", "button")
        : document.querySelector(".button").setAttribute("class", "button pause" )
      }
    );
  }

  //ERREUR : Adaptation pour plus de lisibilité
  //Fonction qui réfraichi le timer si la variable is_run est true 
  setInterval(function () {
    // Si la is run est a true l'horloge tourne
    if (is_run) {
      
      // Avec un nouvel objet date on récupère et injecte dans les span respectif les heures, minutes et secondes.
      let oDate = new Date();
      document.querySelector("#hours").innerHTML = adjustTimer(oDate.getHours());
      document.querySelector("#minutes").innerHTML = adjustTimer(oDate.getMinutes());
      document.querySelector("#seconds").innerHTML = adjustTimer(oDate.getSeconds());


      hours = document.querySelector("#hours").innerHTML;
      minutes = document.querySelector("#minutes").innerHTML;
      seconds = document.querySelector("#seconds").innerHTML;

      // On adapte la couleur du body en utilisant les heures, minutes et secondes qu'on passe à la fonction randomHexColor
      document.querySelector("body").style.backgroundColor = randomHexColor(hours, minutes,seconds);
    }
  }, 1000);

  // ERREUR : Return manquant
  // La fontion ajoute un 0 devant le paramètre si celui ci est inférieur à 10
  function adjustTimer(timer) {
    return timer < 10 ? "0" + timer : timer;
  }
  // ERREUR : Un argument manquant. Adaptation de la fonction pour plus de lisibilité
  // La fonction récupère trois variables et renvoie un string, construit sur le format rgb(x,y,z).
  // Le calcul utilisé dans l'objet Math et sa propiété .floor sert à renvoyer des valeurs comprise entre 0 et 256
  function randomHexColor(x, y, z) {
    r = Math.floor((x / 100) * 256) 
    g = Math.floor((y / 100) * 256) 
    b = Math.floor((z / 100) * 256) 
    color = "rgb("+ r +","+ g +","+ b +")";
    return color;
  }
});
