<!-- ETAPE DE DEBUG -->
<!-- 1  Reformatage du code HTML correction erreur de visu via CTRL+U-->
<!-- 2 -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <!--Balise Title non fermée -->
        <title>Timetitle</title>
        <!-- Appel Google font erroné -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet"> 
        <!-- Coquille appel dossier css -->
        <link rel="stylesheet" href="assets/css/style.css">
        <script src="assets/js/script.js"></script>
    </head>
    <body>
        <div id="wrapper">
            <div class="inside">
                <div class="timer">
                    <span id="hours">00</span>
                    <span id="minutes">00</span>
                    <span id="seconds">00</span>
                </div>
                <div class="controls">
                    <button class="button pause"></button>
                </div>
            </div>
        </div>
        <!-- Body mal fermé -->
    </body>
</html>