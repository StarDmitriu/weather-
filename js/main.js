const apiKey = 'e7023e697cfd6ddd1b49d65e8ff44259';

function getWeatherByCoords(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=ru&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        let cityName = data.city.name;
        let tempValue = data.list.slice(0, 1).map(item => item.main.temp);
        document.querySelector('.city').innerHTML = cityName;
        document.getElementById('temp').innerHTML = tempValue + "°C";

        let tempMinValue = data.list.slice(0, 1).map(item => item.main.temp_min);
        document.getElementById('temp__min2').innerHTML = tempMinValue + "°";

        document.getElementById('temp2').innerHTML = tempValue + "°";

        let min__tempValue = data.list.slice(0, 1).map(item => item.main.temp_min);
        document.getElementById('temp2').innerHTML = min__tempValue + "°";


        let speedwind = data.list.slice(0, 1).map(item => item.wind.speed);
        document.getElementById('speed').innerHTML = speedwind + " км/ч";

        let weather = data.list.slice(0, 1).map(item => item.weather[0].description);
        document.getElementById('weather').innerHTML = weather;
        
        let clouds = data.list.slice(0, 1).map(item => item.clouds.all);
        document.getElementById('all').innerHTML = clouds + " %";


        for (let i = 1; i <= 7; i++) {
            document.getElementById('day' + i).innerHTML = data.list[i].main.temp_max + "°";
        }
        for (let i = 1; i <= 7; i++) {
            document.getElementById('min__temp' + i).innerHTML = data.list[i].main.temp_min + "°";
        }

       


        function updateDates() {
            let now = new Date();
            
            //let month = currentDate.getMonth() + 1;
            for (let i = 0; i < 8; i++) {
                let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
                              "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
                let futureDate = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
                let monthNumber = futureDate.getMonth();
                let monthName = months[monthNumber];
                let day = futureDate.getDate();
                console.log(futureDate.getDate())
                document.getElementById('date' + i).innerHTML = day + " " + monthName;
            }
        }
        
        // Обновляем даты сразу при загрузке страницы
        updateDates();
        
        // Затем обновляем даты каждые 24 часа (86400000 миллисекунд)
        setInterval(updateDates, 86400000);



        /*let today = new Date(month, day);
        console.log(today); 




       /* function updateDates() {
            let now = new Date();
            for (let i = 0; i < 7; i++) {
                let futureDate = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
                document.getElementById('date' + i).innerHTML = futureDate.toISOString().split('T')[0];
            }
        }
        
        // Обновляем даты сразу при загрузке страницы
        updateDates();
        
        // Затем обновляем даты каждые 24 часа (86400000 миллисекунд)
        setInterval(updateDates, 86400000);
*/



        /*
        let today = new Date();

        let today2 = new Date(today);
        today2.setDate(today2.getDate() + 1);

        let today3 = new Date(today2);
        today3.setDate(today3.getDate() + 1);

        let today4 = new Date(today3);
        today4.setDate(today4.getDate() + 1);

        let today5 = new Date(today4);
        today5.setDate(today5.getDate() + 1);

        let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        let dayOfWeek = daysOfWeek[today2.getDay()];*/



        // Массив 'daily' содержит прогноз погоды на 8 дней (сегодня + 7 дней)
        
        
        // Пропустите прогноз на сегодня и переберите прогнозы на следующие 7 дней
        


        /*let now = new Date();

        // Выводим даты на неделю вперед
        for (let i = 0; i < 7; i++) {
            let futureDate = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
            console.log(futureDate.toISOString().split('T')[0]);
            document.getElementById('date' + i).innerHTML = futureDate.toISOString().split('T')[0];
        }


        /*let week__data1 = Math.round(data.list.slice(0, 1).map(item => item.main.temp));
        document.getElementById('max__temp1').innerHTML = week__data1 + "°";*/
    })
    .catch(err => console.log("Произошла ошибка при получении данных о погоде!"));
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        getWeatherByCoords(position.coords.latitude, position.coords.longitude);
    });
} else {
    console.log("Geolocation не поддерживается вашим браузером.");
}





/*
let today = new Date();

// Получение дня, месяца и года
let day = today.getDate();
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let month = months[today.getMonth()];
console.log(day,month);

let month__num = 31;
if(month == 'Январь' || month == 'Март' || month == 'Май' || month == 'Июль' || month == 'Август' || month == 'октябрь' || month == 'декабрь'){
    month__num = 31;
} else if(month == 'Февраль'){
    month__num = 28;
} else {
    month__num = 30;
}


*/




/*
document.querySelector('.date1').innerHTML = day + " " + month;
document.querySelector('.date2').innerHTML = day + " " + month;
document.querySelector('.date3').innerHTML = day + " " + month;
document.querySelector('.date4').innerHTML = day + " " + month;
document.querySelector('.date5').innerHTML = day + " " + month;
document.querySelector('.date6').innerHTML = day + " " + month;
document.querySelector('.date7').innerHTML = day + " " + month;
*/

