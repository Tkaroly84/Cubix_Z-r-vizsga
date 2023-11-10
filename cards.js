import 'Karesz-card';

let cardCounter=0;

export const addCard = (city, date, weatherData) => {
    console.log(city, date, weatherData);

    const minTemp = Math.round(weatherData.minTemp);
    const maxTemp = Math.round(weatherData.maxTemp);

    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.insertAdjacentHTML('afterbegin', `
        <Karesz-card title="${city} - ${date}">
            <div class="card-content">
                <div>${minTemp}°C</div>
                <div>${maxTemp}°C</div>
                <div>
                    <button id="delete-btn-${cardCounter}">Delete</button>
                </div>
            </div>
        </Karesz-card>
    `)

    //document.querySelector('#delete-btn-${cardCounter}')
        //.addEventListener('click', (e) => e.target.closest('zizi-card').remove());
        
    cardCounter++;
}