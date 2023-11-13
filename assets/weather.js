var searchButtonEl = document.querySelector('#searchButton');
var locationSearch = document.querySelector('#cityText');
var mainCardEl = document.querySelector('#mainCard');
var mainCardTemp = document.querySelector('#mainTemp');
var mainCardWind = document.querySelector('#mainWind');
var mainCardHumidity = document.querySelector('#mainHumidity');
var weatherCardEl = document.querySelector('#weatherBoxes');
var previousSearchesEl = document.querySelector('.previousSearches');

var miniCardDate = document.querySelector('#miniDate');
var miniCardTemp = document.querySelector('#miniTemp');
var miniCardWind = document.querySelector('#miniWind');
var miniCardHumidity = document.querySelector('#miniHumidity');

var miniCardDate2 = document.querySelector('#miniDate2');
var miniCardTemp2 = document.querySelector('#miniTemp2');
var miniCardWind2 = document.querySelector('#miniWind2');
var miniCardHumidity2 = document.querySelector('#miniHumidity2');

var miniCardDate3 = document.querySelector('#miniDate3');
var miniCardTemp3 = document.querySelector('#miniTemp3');
var miniCardWind3 = document.querySelector('#miniWind3');
var miniCardHumidity3 = document.querySelector('#miniHumidity3');

var miniCardDate4 = document.querySelector('#miniDate4');
var miniCardTemp4 = document.querySelector('#miniTemp4');
var miniCardWind4 = document.querySelector('#miniWind4');
var miniCardHumidity4 = document.querySelector('#miniHumidity4');

var miniCardDate5 = document.querySelector('#miniDate5');
var miniCardTemp5 = document.querySelector('#miniTemp5');
var miniCardWind5 = document.querySelector('#miniWind5');
var miniCardHumidity5 = document.querySelector('#miniHumidity5');

const apiKey = "5b7bc14c362fbf1c5f08fc9f84c944ae";



    function cityCoords() {

        const cityName = locationSearch.value.trim();

        // creates old searches 
        var newButton= document.createElement('button');
        newButton.className = "btn py-2 w-100 mt-3 mb-2 text-white previous"
        newButton.textContent = cityName;
        previousSearchesEl.appendChild(newButton);

        mainCardEl.textContent = cityName;

        const apiURL =  'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=imperial';



        function fiveDayForecast(lat, lon) {
            const daysApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&cnt=37&appid=5b7bc14c362fbf1c5f08fc9f84c944ae';
            fetch(daysApiUrl)
                .then(function (response) {
                    if (response.ok) {
                        response.json().then(function (data) {
                            console.log(data);

                            
                            // first card
                            var miniDateAndTime = data.list[0].dt_txt;
                            const miniDate = miniDateAndTime.slice(0,  11);
    
                            const miniTemp = data.list[0].main.temp
                            const miniWind = data.list[0].wind.speed
                            const minihumidity = data.list[0].main.humidity

                            miniCardDate.textContent = miniDate;
                            miniCardTemp.textContent = "Temp - " + Math.ceil(miniTemp) + '°F';
                            miniCardWind.textContent = "Wind - " + Math.ceil(miniWind) + "mph"
                            miniCardHumidity.textContent = "Humidity - " + Math.ceil(minihumidity) + "%";

                            // second card
                            var miniDateAndTime = data.list[9].dt_txt;
                            const miniDate2 = miniDateAndTime.slice(0,  11);
    
                            const miniTemp2 = data.list[9].main.temp
                            const miniWind2 = data.list[9].wind.speed
                            const minihumidity2 = data.list[9].main.humidity

                            miniCardDate2.textContent = miniDate2;
                            miniCardTemp2.textContent = "Temp - " + Math.ceil(miniTemp2) + '°F';
                            miniCardWind2.textContent = "Wind - " + Math.ceil(miniWind2) + "mph"
                            miniCardHumidity2.textContent = "Humidity - " + Math.ceil(minihumidity2) + "%";
                             

                            // third card
                            var miniDateAndTime = data.list[18].dt_txt;
                            const miniDate3 = miniDateAndTime.slice(0,  11);
    
                            const miniTemp3 = data.list[18].main.temp
                            const miniWind3 = data.list[18].wind.speed
                            const minihumidity3 = data.list[18].main.humidity

                            miniCardDate3.textContent = miniDate3;
                            miniCardTemp3.textContent = "Temp - " + Math.ceil(miniTemp3) + '°F';
                            miniCardWind3.textContent = "Wind - " + Math.ceil(miniWind3) + "mph"
                            miniCardHumidity3.textContent = "Humidity - " + Math.ceil(minihumidity3) + "%";
                            
                            // fourth card
                            var miniDateAndTime = data.list[27].dt_txt;
                            const miniDate4 = miniDateAndTime.slice(0,  11);

                            const miniTemp4 = data.list[27].main.temp
                            const miniWind4 = data.list[27].wind.speed
                            const minihumidity4 = data.list[27].main.humidity

                            miniCardDate4.textContent = miniDate4;
                            miniCardTemp4.textContent = "Temp - " + Math.ceil(miniTemp4) + '°F';
                            miniCardWind4.textContent = "Wind - " + Math.ceil(miniWind4) + "mph"
                            miniCardHumidity4.textContent = "Humidity - " + Math.ceil(minihumidity4) + "%";
                            
                            // Fifth card
                            var miniDateAndTime = data.list[36].dt_txt;
                            const miniDate5 = miniDateAndTime.slice(0,  11)
    
                            const miniTemp5 = data.list[36].main.temp
                            const miniWind5 = data.list[36].wind.speed
                            const minihumidity5 = data.list[36].main.humidity

                            miniCardDate5.textContent = miniDate5;
                            miniCardTemp5.textContent = "Temp - " + Math.ceil(miniTemp5) + '°F';
                            miniCardWind5.textContent = "Wind - " + Math.ceil(miniWind5) + "mph"
                            miniCardHumidity5.textContent = "Humidity - " + Math.ceil(minihumidity5) + "%";
                              


    
                            
                            

                             
                            
                            
                        });
                    } else {
                        alert('Error ' + response.status);
                    }
                })
                .catch(function (error) {
                    alert('Unable to connect');
                })
        }
    




        fetch(apiURL)
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        // console.log(data);
                        const lat = data.coord.lat;
                        const lon = data.coord.lon
                        const temp = data.main.temp
                        const wind  = data.wind.speed
                        const humidity = data.main.humidity
                        const name = data.name

                        fiveDayForecast(lat, lon);

                        mainCardTemp.textContent = 'Temperature: ' + Math.ceil(temp) + '°F';
                        mainCardWind.textContent = 'Wind: ' + Math.ceil(wind) + ' mph';
                        mainCardHumidity.textContent = 'Humidity: ' + Math.ceil(humidity) + '%';
                        
                        
                    });
                } else {
                    alert('Error ' + response.status);
                }
            })
            .catch(function (error) {
                alert('Unable to connect');
            })

        console.log(cityName);
        
    }


    



searchButtonEl.addEventListener("click", function() {
    cityCoords();
    
    
    

});
   

