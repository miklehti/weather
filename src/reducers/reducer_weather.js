import { FETCH_WEATHER} from '../actions/index'

export default function(state = [], action){
	// on käynyt middlewaren kautta koska on jo arvo kun tulee tänne

	switch (action.type){
		case FETCH_WEATHER:
		// ansa: pitää aina palauttaa uusi lista! eli ei voi edioida vanhaa statea! esim. state.push(action.payload.data ), 
		//concat palauttaa uuden elistate.concat([ action.payload.data ]);
		// => ES6 syntax sama [ action.payload.data, ...state ]
			return [ action.payload.data, ...state ];
	}
	return state;
}