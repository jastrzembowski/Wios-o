import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { navStyles } from "../../Navigacja/nav-styles";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

export default function Profile() {
  const classes = navStyles();
  const [state, setState] = React.useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 

  return (
    <div>
      <React.Fragment key={"right"}>
        <ListItem button
          onClick={toggleDrawer("right", true)}
          className={classes.menuTextStyle}
        >
          <ListItemIcon className={classes.menuTextStyle}>
            <AccountBoxIcon className={classes.menuTextStyle} />
          </ListItemIcon>
          <ListItemText primary={"Profil"} />
        </ListItem>

        <Drawer
          className={clsx(classes.drawerProfile, {
            [classes.drawerOpenPerson]: "right",
            [classes.drawerClose]: !"right",
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpenPerson]: "right",
              [classes.drawerClose]: !"right",
            }),
          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
                Hejko
        </Drawer>
      </React.Fragment>
    </div>
  );
}
