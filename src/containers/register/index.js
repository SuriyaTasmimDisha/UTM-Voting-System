import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
	root: {
		marginTop: '3rem',
	},
	title: {
		color: '#ff9671',
		marginBottom: '1.5rem',
		paddingTop: '2rem',
	},
	input: {
		marginBottom: '1.8rem',
		'& label.Mui-focused': {
			color: '#ff9671',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#ff9671',
		},
		width: '20rem',
        marginLeft: '2.5rem',
	},
	button: {
		color: '#fff',
		backgroundColor: '#ff9671',
		fontWeight: 'bold',
		'&:hover': {
			color: '#fff',
			backgroundColor: '#ff9671',
		},
		width: '20rem',
		marginLeft: '2.5rem',
	},
	paper: {
		height: '19rem',
		width: '25rem',
	},
}));

export default function Register() {
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
