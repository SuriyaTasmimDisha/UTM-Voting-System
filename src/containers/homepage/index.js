import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: '7rem',
		color: '#5D001D',
	},
	font: {
        fontWeight: 'bold',
		color: '#5D001D',
		paddingTop: '0.7rem'
	},
}));

export default function Homepage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify='center' alignItems='center'>
				<Grid item xs={8}>
					<Typography variant='h4' align='center'>
						Welcome to
					</Typography>
					<Typography className={classes.font} variant='h3' align='center'>
						UTM VOTING SITE
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
