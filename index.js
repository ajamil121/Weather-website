const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const mainWeather=document.querySelector('.main-weather');
const weatherDetails=document.querySelector('.weather-details');
const error404= document.querySelector('.not-found');


search.addEventListener('click', () => {
  const APIKey ='01ab9b409530a9e3a6140f8b22ab9cee';
  const city = document.querySelector('.search-box input').value;
  
  if(city == '')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json()).then(json => {

        console.log(fetch)

        if(json.cod == '404'){
            container.style.height ='400px';
            mainWeather.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        } 
        
        container.style.height ='555px';
        mainWeather.classList.add('active');
        weatherDetails.classList.add('active');
        error404.classList.remove('active');

        const image=document.querySelector('.main-weather img');
        const temperature=document.querySelector('.main-weather .temperature');
        const description=document.querySelector('.main-weather .description');
        const humidity=document.querySelector('.weather-details .humidity span');
        const wind=document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                image.src ='assest/clear.png';
            break;
             
            case 'Rain':
                image.src ='assest/rain.png';
            break;
            
            case 'Snow':
                image.src ='assest/snow.png';
            break;
            
            case 'Clouds':
                image.src ='assest/cloud.png';
            break;
            case 'Mist':
                image.src ='assest/mist.png';
            break;

             case 'Haze':
             image.src ='assest/mist.png';
         break;

            default:
                image.src='assest/cloud.png';
            
        }
        temperature.innerHTML= `${parseInt(json.main.temp)} <span> °C </span>`;
        // description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });

});