import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {


	//nyt päästään weatheriin käsiksi this.props.weather


	renderWeather(cityData){
		if(cityData===null || cityData === undefined){
			return;
		}


		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat} = cityData.city.coord;
		/* ES6 sama kuin alla"
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;
		*/

		return (
			<tr key={name}>
				<td>
					<GoogleMap lat={lat} lon={lon} />
				</td>
				<td>
					<Chart data={temps} color="orange" units="K" />
				</td>
				<td>
					<Chart data={pressures} color="green" units="hPA"/>
				</td>
				<td>
					<Chart data={humidities} color="black" units="%" />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}
// halutaan tuoda statesta weather tälle komponentille.
function mapStateToProps({weather}){
	//state.weather koska on niin määritelty reducers/index.js
	return {  weather }; // = return {  weather: weather }
}

export default connect(mapStateToProps)(WeatherList);

/* yläpuolella on sama asia kuin alla ES6:
function mapStateToProps(state){
	//state.weather koska on niin määritelty reducers/index.js
	return { weather: state.weather}
}*/
