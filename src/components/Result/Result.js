import React from 'react';

const Result = (props) => {

    const {city, humidity_tommorrow, wind_tommorrow, temp_today, temp_tommorrow, icon_tommorrow, icon_today, wind_today, humidity_today, err} = props.weather;

    let content = null;

    if(!err && city) {

        content = (

            <div class="container row">

              <div class="card w-50 card-body bg-dark text-white text-center  " >
                <img src={`http://openweathermap.org/img/wn/${icon_today}@2x.png`} class="card-img-top" alt=""></img>
                <h5 class="card-text shadow p-3">{city} na teraz</h5>
                <h6 class="card- shadow-sm">Temperatura: {temp_today} &#176;C</h6>
                <p class="card-text">Wilgotność: {humidity_today} %</p>
                <p class="card-text">Wiatr: {wind_today} m/s</p>  
              </div> 

              <div class="card w-50 card-body bg-dark text-white text-center  " >
                <img src={`http://openweathermap.org/img/wn/${icon_tommorrow}@2x.png`} class="card-img-top" alt=""></img>
                <h5 class="card-text shadow p-3">{city} na jutro</h5>
                <h6 class="card- shadow-sm">Temperatura: {temp_tommorrow} &#176;C</h6>
                <p class="card-text">Wilgotność: {humidity_tommorrow} %</p>
                <p class="card-text">Wiatr: {wind_tommorrow} m/s</p>  
              </div>

            </div>
        )
    }

    return (
        
          <div className='result'>
          {err ? `Strona 404 - Nie mamy w bazie ${city}`: content}    
          </div>
                
    );
}

export default Result;

