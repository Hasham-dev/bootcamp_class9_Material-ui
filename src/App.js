import React from 'react';
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import Barchart from './Barchart'
const useStyles = makeStyles((theme) => ({
  paper: {
    width: 600,
    margin: "40px auto auto auto",
    textAlign: "center",
    padding: 15
  },
  input: {
    width:"95%",
    marginBottom: "10px"
  }
}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />
          <TextField label="Enter Password"  className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>
        </form>
      </Paper>
    <Barchart />
    </div>
  );
}

export default App;
