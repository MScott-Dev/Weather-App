var searchButtonEl = document.querySelector('#searchButton');
var locationSearch = document.querySelector('#cityText');
var mainCardEl = document.querySelector('#mainCard');
var mainCardTemp = document.querySelector('#mainTemp');
var mainCardWind = document.querySelector('#mainWind');
var mainCardHumidity = document.querySelector('#mainHumidity');
var weatherCardEl = document.querySelector('#weatherBoxes');

const apiKey = "5b7bc14c362fbf1c5f08fc9f84c944ae";

    function cityCoords() {

        const cityName = locationSearch.value.trim();

        mainCardEl.textContent = cityName;

        const apiURL =  'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=imperial';

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


    function fiveDayForecast(lat, lon) {
        const daysApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&cnt=18&appid=5b7bc14c362fbf1c5f08fc9f84c944ae';
        fetch(daysApiUrl)
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log(data);
                        var miniDateAndTime = data.list[0].dt_txt;
                        var miniDate = miniDateAndTime.slice(0,  11)

                        var miniTemp = data.list[0].main.temp
                        var miniWind = data.list[0].wind.speed
                        var minihumidity = data.list[0].main.humidity


                        console.log(miniDate);
                        console.log(Math.ceil(miniTemp));
                        console.log(Math.ceil(miniWind));
                        console.log(Math.ceil(minihumidity));

                        var newSection = document.createElement('section')

                        weatherCardEl.appendChild(newSection);
                        
                    });
                } else {
                    alert('Error ' + response.status);
                }
            })
            .catch(function (error) {
                alert('Unable to connect');
            })
    }



searchButtonEl.addEventListener("click", function() {
    cityCoords();
});
   

