import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AddChirp from './components/AddChirp';
import Admin from './components/Admin';

export interface AppProps { };

const App: React.FC<AppProps> = props => {
    return (
		<BrowserRouter>
			<Switch>
				
				<Route exact path="/" component={Home} />
				<Route exact path="/new" component={AddChirp} />
				<Route exact path="/:id/admin" component={Admin} />

			
			</Switch>
		</BrowserRouter>		
	);
};

interface IAppProps {}

interface IAppState {}

export default App;