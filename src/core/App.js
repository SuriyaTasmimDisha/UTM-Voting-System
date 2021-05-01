import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Navbar from '../components/navbar';
import Homepage from '../containers/homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../containers/Login';
import Register from '../containers/register';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
	},
}));

function App() {
	const classes = useStyles();

	return (
		<div className='bgStyle'>
			<Container className={classes.root} component='main'>
				<Navbar />
				<Router>
					<Switch>
						<Route path='/' exact component={Homepage} />
						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
				</Switch>
				</Router>
			</Container>
		</div>
	);
}

export default App;
