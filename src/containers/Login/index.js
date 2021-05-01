import {
	Button,
	Grid,
	makeStyles,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
	root: {
		marginTop: '3rem',
	},
	title: {
		color: '#5D001D',
		marginBottom: '1.5rem',
		paddingTop: '2rem',
	},
	input: {
		marginBottom: '1.8rem',
		'& label.Mui-focused': {
			color: '#5d001d',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#5d001d',
		},
		width: '20rem',
        marginLeft: '2.5rem',
	},
	button: {
		color: '#fff',
		backgroundColor: '#5d001d',
		fontWeight: 'bold',
		'&:hover': {
			color: '#fff',
			backgroundColor: '#5d001d',
		},
		width: '20rem',
		marginLeft: '2.5rem',
	},
	paper: {
		height: '19rem',
		width: '25rem',
	},
}));

export default function Login() {
	const classes = useStyles();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Grid
			className={classes.root}
			container
			justify='center'
			alignItems='center'>
			<Grid item xs={6}>
				<Paper elevation={5} className={classes.paper}>
					<Typography align='center' variant='h4' className={classes.title}>
						Login
					</Typography>
					<form noValidate autoComplete='off'>
						<TextField
							className={classes.input}
							size='small'
							id='standard-basic'
							label='Email'
							type='email'
							value={email}
							required
						/>
						<TextField
                            className={classes.input}
                            size='small'
							id='outlined-basic'
							label='Password'
							type='password'
							value={password}
							required
						/>
						<Button
							className={classes.button}
							type='submit'
							variant='contained'>
							Login
						</Button>
					</form>
				</Paper>
			</Grid>
		</Grid>
	);
}
