import React, {useState} from "react";
import { Button } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { navStyles } from "../Navigacja/nav-styles"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
export default function Logout() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [message, setMessage] = useState("")
  const classes = navStyles();

  async function handleLogout() {

    try {
        setError('')
        setMessage("Pomyślnie wylogowano!")
      await logout();
      history.push("/Home");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
  
      <ListItem
            button
            className={classes.menuTextStyle}
            onClick={()=> handleLogout()}

          >
            <ListItemIcon
              style={{ color: "white" }}
              className={classes.menuTextStyle}
            >
              <ExitToAppIcon className={classes.menuTextStyle} />
            </ListItemIcon>
            <ListItemText primary={"Wyloguj się"} />
          </ListItem>


    </div>
  );
}
