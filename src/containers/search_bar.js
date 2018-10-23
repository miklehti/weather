import React, { Component } from 'react';
//eli koska tämä on kontaineri ja on tekemisissä reduxin kanssa se täytyy linkittää reduxiin.
import { connect } from 'react-redux';
// koska halutaan että submit laukaisee ajax kutsun, täytyý containeri linkittä action creatoriin
import { bindActionCreators } from 'redux';
// tuodaan action creator
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	//komponentin state
	constructor(props){
		super(props);



		this.state = { term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		//kyseessä komponentin state, ei koko applilkaation
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		//estää että ei lähetä Enteristä lomaketta ym.
		event.preventDefault();

		//we need to go and fetch weather data
		//eli kun alla hookattu fetchWeather, miellä on pääsy siihen nyt. kaupungiksi tulee mikä on syötteenä lomakkeella
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five day forecast in you favorite cities in US for ex. Sacramento"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);

	}
}

//hookataan fetchWeather action creator search baaríin
//mapDispatchToProps käytetään kun halutaan käytätä action creatoreita tuottamana propsit componentille.
//mapStateToProps jos halutaan tuoda varastoitua dataa komponentille.
function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch);
}

//connectoidaan tämä search bar reduxiin. null koska tässä containerissa ei kiinnosta applikaation state.
export default connect(null, mapDispatchToProps)(SearchBar);
