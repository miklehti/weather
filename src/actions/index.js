import axios from 'axios';

const API_KEY= 'aebac47dd734f559ff1c58a8ef0d26f9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//tätä voidaan käyttää muuallakin jotta ei typoja esim reducerisa. Joku reduceri hanskaa tuon...
export const FETCH_WEATHER = 'FETCH_WEATHER';

//eli saa argumenttina cityn 
export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;

	const request = axios.get(url);


	return {
		//actionCreatorsien täytyy aina palauttaa Action!
		//Action on olio jolla aina on type:
		type: FETCH_WEATHER,
		payload: request
	}
}