window.addEventListener("DOMContentLoaded", (event) => {
  // true sous forme de string au lieu de bool
  let is_run = true;

  init();

  // mauvaise indentation et clic au lieu de click
  function init() {
    document.querySelector(".button").addEventListener("click",(event) => {
        is_run = !is_run;
        ((document.querySelector(".button").className + " ").indexOf("pause") > -1)
        ? document.querySelector(".button").setAttribute("class", document.querySelector(".button").getAttribute("class").replace(" pause", ""))
        : document.querySelector(".button").setAttribute("class",document.querySelector(".button").getAttribute("class") + " pause" )
      }
    );
  }

  // Adaptation pour plus de lisibilité
  setInterval(function () {
    if (is_run) {
      
      let oDate = new Date();
      document.querySelector("#hours").innerHTML = adjustTimer(oDate.getHours());
      document.querySelector("#minutes").innerHTML = adjustTimer(oDate.getMinutes());
      document.querySelector("#seconds").innerHTML = adjustTimer(oDate.getSeconds());

      hours = document.querySelector("#hours").innerHTML;
      minutes = document.querySelector("#minutes").innerHTML;
      seconds = document.querySelector("#seconds").innerHTML;

      document.querySelector("body").style.backgroundColor = randomHexColor(hours, minutes,seconds);
    }
  }, 1000);

  // Return manquant
  function adjustTimer(timer) {
    return timer < 10 ? "0" + timer : timer;
  }
  //Adaptation de la fonction pour plus de lisibilité 
  function randomHexColor(x, y, z) {
    r = Math.floor((x / 100) * 256) 
    g = Math.floor((y / 100) * 256) 
    b = Math.floor((z / 100) * 256) 
    color = "rgb("+ r +","+ g +","+ b +")";
    return color;
  }
});
