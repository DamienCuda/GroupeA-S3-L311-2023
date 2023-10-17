<!DOCTYPE html>
<!-- Non obligatoire mais l'attribut lang manquait -->
<html lang="en">

<head>
    <meta charset="utf-8">
    <!-- Il manquait la balise fermante title -->
    <title>Timetitle</title>
    <!-- Le lien des Google n'était pas bon -->
    <link href="https://fonts.googleapis.com/css?family=Aldrich" rel="stylesheet">
    <!-- Le dossier asset était mal renseigné -->
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/script.js"></script>
</head>

<body>
    <div id="wrapper">
        <!-- L'id wrapper était de trop -->
        <div class="inside">
            <div class="timer"><span id="hours">00</span><span id="minutes">00</span><span id="seconds">00</span></div>
            <div class="controls"><button class="button pause"></button></div>
        </div>
    </div>
<!-- Il manquait le / pour fermer le body -->
</body>

</html>