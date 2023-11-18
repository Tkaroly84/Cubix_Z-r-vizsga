import { addCard } from './cards';

export const fetchData = async (selectedCountry) => {
  const apiUrl = `https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country=${selectedCountry}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Hiba a kérés során: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
console.log(data);

addCard({
  country: data.country,
  capital_city: data.capital_city,
  confirmed: data.confirmed,
  deaths: data.deaths
});

  } catch (error) {
    console.error('Hiba:', error);
  }
};

document.getElementById('dataForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const countrySelect = document.getElementById('country-input');
  const selectedCountry = countrySelect.value;

  fetchData(selectedCountry);
});
