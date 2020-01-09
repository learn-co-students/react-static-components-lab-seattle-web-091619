import React, { Component } from 'react';
import CatComponent, {Cat} from './CatComponent.js';
import EinsteinQuoteComponent, { Einstein } from './EinsteinQuoteComponent.js';
import MouseComponent, { Mouse } from './MouseComponent.js';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
