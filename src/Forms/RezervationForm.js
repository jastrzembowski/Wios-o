import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const RezFormStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  }));


function RezervationForm(){
        const classes = RezFormStyles();
        return (
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Imę" variant="outlined" />
                    <TextField id="outlined-basic" label="Nazwisko" variant="outlined" />
                    <TextField id="outlined-basic" label="Ilość osób" variant="outlined" type="number"/>
                    <TextField id="outlined-basic" label="Numer telefonu" variant="outlined" type="number"/>
                    <TextField id="outlined-basic" label="Mail" variant="outlined" />
                    <Button variant="outlined" color="primary"> Zarezerwuj </Button>
                </form>
        )
    
}

export default RezervationForm;