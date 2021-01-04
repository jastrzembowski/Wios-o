import React, {useState} from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from './Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import ActionButton from "./ActionButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white'
  },
  formControl: {
    margin: theme.spacing(3),
    display: 'flex'
  },
}));


export default function LevelCheckbox(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    easy: true,
    medium: false,
    hard: false,
  });

  const { handleClose } = props;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { easy, medium, hard } = state;
  const error = [easy, medium, hard].filter((v) => v).length !== 2;

  return (

    <div className={classes.root}       >
      <FormControl  component="fieldset" className={classes.formControl}>
      <div style={{ display: "flex" }}>
        <FormLabel  component="div" style={{ flexGrow: 1 }}>Wybierz poziom trudności</FormLabel>
        <div style={{marginTop: "-10px", marginRight: "-8%"}}>
        <ActionButton 
        onClick={handleClose}
        color="primary"
        >
          <CloseIcon
          >

          </CloseIcon>
          </ActionButton>
          </div>
          </div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={easy} onChange={handleChange} name="easy" />}
            label="Łatwy"
          />
          <FormControlLabel
            control={<Checkbox checked={medium} onChange={handleChange} name="medium" />}
            label="Średni"
          />
          <FormControlLabel
            control={<Checkbox checked={hard} onChange={handleChange} name="hard" />}
            label="Trudny"
          />
        </FormGroup>
        <Button 
           text = "Zapisz"
           variant = "contained"
           startIcon = {<AddIcon />}
           type = 'submit'
            color="primary"
           onClick={handleClose}
           className = {classes.newButton}/>
      </FormControl>
    </div>
  );
}