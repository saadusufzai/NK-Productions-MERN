import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './Header.module.css'

import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar:{
      display: 'flex',
      justifyContent: 'space-between',
  },
  menu:{
      display:'flex',
      marginLeft: theme.spacing(5),
  },
  
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={styles.navbar}>
          <div className={styles.logo}>
              LOGO
          </div>
        <div className={styles.menu}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" >Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/about" >About</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/contact" >Contact</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
