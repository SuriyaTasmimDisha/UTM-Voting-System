import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Link, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		boxShadow: 'none',
	},
	appbar: {
		paddingTop: '1.5rem',
	},
	title: {
		flexGrow: 1,
		color: '#5D001D',
		fontWeight: 'bold',
		'&:hover': {
			textDecoration: 'none',
		},
	},
	button: {
		color: '#5D001D',
		padding: '1.5rem',
		'&:hover': {
			background: 'none',
		},
		// '&:active': {
		// 	background: 'red'
		// }
	},
}));

export default function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar
				position='static'
				color='transparent'
				elevation={0}
				className={classes.appbar}>
				<Toolbar>
					<Typography
						component={Link}
						href='/'
						variant='h5'
						className={classes.title}>
						<img src='/images/UTM-LOGO-FULL.png' style={{width:'145px'}} />
					</Typography>
					<Button component={Link} href='/' className={classes.button}>
						Home
					</Button>
					<Button component={Link} href='/login' className={classes.button}>
						Login
					</Button>
					<Button component={Link} href='/register' className={classes.button}>
						Register
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
