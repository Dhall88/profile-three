import React, { useState, useEffect } from "react";
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Three from './components/three';
import ping from 'web-pingjs'
// import Magic from './components/magic';
// import Admin from './components/admin'
import "./App.css"

const App = () => {

	// const doPing = function(i) {
	// 	const appName = 'fruitfight'
	// 	ping(`http://${appName}.herokuapp.com`)
	//   };

	//   doPing();



	return (

			<HashRouter>
					<Route path="/" exact component={Three} />
					{/* <Route path="/profile" exact component={Profile} /> */}
			</HashRouter>
		
	);
}

export default App;