let cardCounter = 0;

export const addCard = ({ country, capital_city, confirmed, deaths }) => {
    console.log(country, capital_city, confirmed, deaths);

    const cardsContainer = document.getElementById('cards');
    cardsContainer.insertAdjacentHTML('afterbegin', `
        <zizi-card title="${country}">
            <div class="card-content">
                <div>Főváros: ${capital_city}</div>
                <div>Megbetegedések száma: ${confirmed}</div>
                <div>Elhunytak száma: ${deaths}</div>
                <div>
                    <button class="btn btn-warning" id="delete-btn-${cardCounter}">Delete</button>
                </div>
            </div>
        </zizi-card>
    `);

    document.querySelector(`#delete-btn-${cardCounter}`)
        .addEventListener('click', (e) => e.target.closest('zizi-card').remove());
        
    cardCounter++;
}
