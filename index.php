<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="style.css" rel="stylesheet" />
    <link href="style_responsive.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;800&display=swap" rel="stylesheet">
</head>
<body>
    <div class= "container">
        <div class="mainBoxContainer">
            <div class="locationTemp">
                <h1 id="country"></h1>
            <div class= "temperature"></div>
            <div class= "feeling">Ressenti : <span id="ressenti"></span></div>
            </div>
            <div class="switchModContainer">
                <label class="switch">
                <input id="switch" class="switch" type="checkbox" />
                <span class="slider round"></span>
            </div>
        </div>
        <div class="rainfall box">
            <div class="flexText">
                <p id="rainfall"></p>
                <h2>Précipitations</h2>
            </div>
            <div class="flexIcon">
                <img src="images/precipitations.svg" alt="Icône précipitations" id="Precipitations"/>
            </div>
        </div>
        <div class="wind box">
            <div class="flexText">
                <p id="wind"></p>
                <h2>Vent</h2>
            </div>
            <div class="flexIcon">
                <img src="images/vent.svg" alt="Icône vitesse du vent" id="vent"/>
            </div>
        </div>
        <div class="humidity box">
            <div class="flexText">
                <p id="humidity"></p>
                <h2>Humidité</h2>
            </div>
            <div class="flexIcon">
                <img src="images/humidite.svg" alt="Icône pourcentage d'humidité" id="humidite"/>
            </div>
        </div>
        <div class="pressure box">
            <div class="flexText">
                <p id="pressure"></p>
                <h2>Pression</h2>
            </div>
            <div class="flexIcon">
                <img src="images/pression.svg" alt="Icône pression atmosphérique" id="pression"/>
            </div>
        </div>
        <div class="uvIndex box">
            <div class="flexText width">
                <p id="uvIndex"></p>
                <div class ="progressContainer">
                    <div class ="fillerUV"></div>
                </div>
                <h2>Indice UV</h2>
            </div>
            <div class="flexIcon">
                <img src="images/indiceuv.svg" alt="Icône indice UV" id="indiceUV"/>
            </div>
        </div>
        <div class="IQA box">
            <div class="flexText width">
                <p><span id="iqaText"></span><span id="iqaValue"></span></p>
                <div class ="progressContainer">
                    <div class ="fillerIQA"></div>
                </div>
                <h2>Qualité de l'air</h2>
            </div>
            <div class="flexIcon">
                <img src="images/qualiteair.svg" alt="Icône qualité de l'air (IQA)" id="qualiteAir"/>
            </div>
        </div>
        <div class="sunContainer box">
            <div class="sunBoxes">
                <p id=sunrise></p>
                <h2>Lever de soleil</h2>
            </div>
            <div class="sunIcon">
                <img src="images/levercouchersoleil.svg" alt="Icône lever et coucher de soleil" id="leverCoucherSoleil"/>
            </div>
            <div class="sunBoxes">
                <p id=sunset></p>
                <h2>Coucher de soleil</h2>
            </div>
        </div>
        
    </div>
    <script src="app.js" defer></script>
</body>
</html>