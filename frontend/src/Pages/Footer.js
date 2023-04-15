import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#112d32',
    padding: theme.spacing(4),
    color: '#e5ffff',
    marginTop: theme.spacing(4),
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
      color: '#e5ffff',
    },
  },
  iconButton: {
    margin: '0 4px',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justify="space-between">
          <Grid item xs={12} sm={6} className={classes.text}>
            <Typography variant="body2" color="#e5ffff">
              © {new Date().getFullYear()} Timeपे. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} >
            <IconButton aria-label="twitter" className={classes.iconButton} style={{ color: "#e5ffff" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="facebook" className={classes.iconButton} style={{ color: "#e5ffff" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="instagram" className={classes.iconButton} style={{ color: "#e5ffff" }}>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
