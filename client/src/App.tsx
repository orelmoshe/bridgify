import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';
import Search from 'components/Search';
import Result from 'components/Result';
import PlaceInfo from 'components/PlaceInfo';
import './App.css';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={Search} />
					<Route path="/places" component={Result} />
					<Route path="/:xid" component={PlaceInfo} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
