// Fonction permettant d'afficher le nom de la ville parente des données météorologiques
async function getCountry(){
    navigator.geolocation.getCurrentPosition((position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        const endpoint = "https://api.api-ninjas.com/v1/reversegeocoding";        
        const url = endpoint + "?lat=" + lat + "&lon=" + lon;

        fetch(url, {
            method: 'GET',
            headers: { 'X-Api-Key': 'rcvzsAEywNqBy0DSPAQRmA==ZBS1JTq7i0zdlDtn'},
        })
        .then(response => response.json())
        .then(data =>{
            document.querySelector('#country').innerHTML = data[0]['name'];
        })
    }))
}

getCountry()

async function onecall(){
    // Récupération des données de localisation
    navigator.geolocation.getCurrentPosition((position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        const endpoint = "https://api.openweathermap.org/data/2.5/onecall";        
        const apikey = "caefd044204e11b3527362295135047e";
        const unity = "metric"
        const url = endpoint + "?lat=" + lat + "&lon=" + lon + "&appid=" + apikey + "&units=" + unity;

        fetch(url, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(data =>{
                document.querySelector('.temperature').innerHTML = data.current.temp.toFixed(0) + "°C";
                document.querySelector('#humidity').innerHTML = data.current.humidity.toFixed(0) + " %";
                document.querySelector('#pressure').innerHTML = data.current.pressure.toFixed(0) + " mb";
                document.querySelector('#ressenti').innerHTML = data.current.feels_like.toFixed(0) + "°C";
                document.querySelector('#wind').innerHTML = data.current.wind_speed.toFixed(0) + " km/h";
                let uvValue = data.current.uvi;
                        // En fonction de la valeur de l'indice UV
                        // - on affiche un niveau d'intensité différent, de Faible à Extrème
                        // - la barre de progression change de width
                        // - la barre de progression change de couleur
                        if(uvValue <= 2) {
                            document.querySelector('#uvIndex').innerHTML = "Faible";
                            document.querySelector('.fillerUV').style.backgroundColor = "#00FF64";
                            document.querySelector('.fillerUV').style.width = "20%";
                        } else {
                            if(uvValue >= 3 && uvValue <= 5) {
                                document.querySelector('#uvIndex').innerHTML = "Modéré";
                                document.querySelector('.fillerUV').style.backgroundColor = "#93FF00";
                                document.querySelector('.fillerUV').style.width = "40%";
                            } else {
                                if(uvValue >= 6 && uvValue <= 7){
                                    document.querySelector('#uvIndex').innerHTML = "Élevé";
                                    document.querySelector('.fillerUV').style.backgroundColor = "#FFF000";
                                    document.querySelector('.fillerUV').style.width = "60%";
                                } else {
                                    if(uvValue >= 8 && uvValue <= 10){
                                        document.querySelector('#uvIndex').innerHTML = "Très Élevé";
                                        document.querySelector('.fillerUV').style.backgroundColor = "#FF5500";
                                        document.querySelector('.fillerUV').style.width = "80%";
                                    } else {
                                        if(uvValue >= 11){
                                            document.querySelector('#uvIndex').innerHTML = "Extrème";
                                            document.querySelector('.fillerUV').style.backgroundColor = "#CA0000";
                                            document.querySelector('.fillerUV').style.width = "100%";
                                        }
                                    }
                                }
                            }
                        }
            // Fonction qui transforme le timeStamp en heures et minutes pour le lever de soleil
            function sunRise(){
                let date = new Date(data.current.sunrise);
                let hours = date.getHours();
                let min = date.getMinutes()
                document.querySelector('#sunrise').innerHTML = hours + ":" + min;
            }
            sunRise();
            // Fonction qui transforme le timeStamp en heures et minutes pour le coucher de soleil
            function sunSet(){
                let date = new Date(data.current.sunset);
                let hours = date.getHours();
                let min = date.getMinutes()
                document.querySelector('#sunset').innerHTML = hours + ":" + min;
            }
            sunSet();

            document.querySelector('#rainfall').innerHTML = data.current.rain["1h"] + " mm/h";
        })
    }))
};
onecall();

async function airPollution(){
    navigator.geolocation.getCurrentPosition((position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        const endpoint = "http://api.openweathermap.org/data/2.5/air_pollution";
    const apikey = "caefd044204e11b3527362295135047e";
    const unity = "metric"
    const url = endpoint + "?lat=" + lat + "&lon=" + lon + "&appid=" + apikey + "&units=" + unity;

    fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data =>{
            document.querySelector('#iqaValue').innerHTML = " (" + data.list[0].main.aqi + ")";
            let iqaIndex = data.list[0].main.aqi;
            // Selon l'indice de qualité de l'air :
            // - on affiche un indicateur de qualité, de Très Bonne à Très Mauvaise
            // - la barre de progression change de width
            // - la barre de progression change de couleur
            if (iqaIndex === 1){
                document.querySelector('#iqaText').innerHTML = "Très Bonne";
                document.querySelector('.fillerIQA').style.backgroundColor = "#00FF64";
                document.querySelector('.fillerIQA').style.width = "20%";
            } else {
                if (iqaIndex === 2) {
                    document.querySelector('#iqaText').innerHTML = "Bonne";
                    document.querySelector('.fillerIQA').style.backgroundColor = "#93FF00";
                    document.querySelector('.fillerIQA').style.width = "40%";
                } else {
                    if (iqaIndex === 3){
                        document.querySelector('#iqaText').innerHTML = "Moyenne";
                        document.querySelector('.fillerIQA').style.backgroundColor = "#FFF000";
                        document.querySelector('.fillerIQA').style.width = "60%";
                    } else {
                        if (iqaIndex === 4) {
                            document.querySelector('#iqaText').innerHTML = "Mauvaise";
                            document.querySelector('.fillerIQA').style.backgroundColor = "#FF5500";
                            document.querySelector('.fillerIQA').style.width = "80%";
                        } else {
                            if(iqaIndex === 5) {
                                document.querySelector('#iqaText').innerHTML = "Très Mauvaise";
                                document.querySelector('.fillerIQA').style.backgroundColor = "#CA0000";
                                document.querySelector('.fillerIQA').style.width = "100%";
                            }
                        }
                    }
                }
            }
        })
    })) 
};
airPollution();


// Personnalisation des thèmes Light et Dark du Dashboard grâce à la checkbox toggle
const switchModBtn = document.getElementById('switch');
switchModBtn.addEventListener('change', function(){
    if(switchModBtn.checked){
        document.documentElement.style.setProperty('--background', 'linear-gradient(#021F42, #46049B)');
        document.documentElement.style.setProperty('--mainBoxContainerBG', 'rgba(87, 230, 230, 0.9)');
        document.documentElement.style.setProperty('--typeColor', '#57E6E6')
        document.documentElement.style.setProperty('--h2Color', '#021F42');
        document.documentElement.style.setProperty('--tempColor', '#021F42');
        document.getElementById("Precipitations").src = "images/PrecipitationsDark.svg";
        document.getElementById("vent").src = "images/ventDark.svg";
        document.getElementById("humidite").src = "images/humiditeDark.svg";
        document.getElementById("pression").src = "images/pressionDark.svg";
        document.getElementById("indiceUV").src = "images/indiceuvDark.svg";
        document.getElementById("qualiteAir").src = "images/qualiteairDark.svg";
        document.getElementById("leverCoucherSoleil").src = "images/levercouchersoleilDark.svg";
    } else {
        document.documentElement.style.setProperty('--background', 'linear-gradient(#12BDE1, #baf0fc)');
        document.documentElement.style.setProperty('--mainBoxContainerBG', 'rgba(240, 255, 255, 0.9)');
        document.documentElement.style.setProperty('--typeColor', '#094A58');
        document.documentElement.style.setProperty('--h2Color', '#baf0fc');
        document.documentElement.style.setProperty('--tempColor', '#094A58');
        document.getElementById("Precipitations").src = "images/Precipitations.svg";
        document.getElementById("vent").src = "images/vent.svg";
        document.getElementById("humidite").src = "images/humidite.svg";
        document.getElementById("pression").src = "images/pression.svg";
        document.getElementById("indiceUV").src = "images/indiceuv.svg";
        document.getElementById("qualiteAir").src = "images/qualiteair.svg";
        document.getElementById("leverCoucherSoleil").src = "images/levercouchersoleil.svg";
    }
    
});