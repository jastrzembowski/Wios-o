import React, { useContext, useState, useEffect } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import logoWhite from "../Home/images/logoWhite.png";
import HomeIcon from "@material-ui/icons/Home";
import RowingIcon from "@material-ui/icons/Rowing";
import MapIcon from "@material-ui/icons/Map";
import { navStyles } from "./nav-styles";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../AddNewOfferForm/Popup";
import AddNewOfferForm from "../AddNewOfferForm/AddNewOfferForm";
import Button from "../AddNewOfferForm/Button";
import Signup from "../LoginRegister/Signup";
import Login from "../LoginRegister/Login";
import Logout from "../LoginRegister/Logout";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useAuth } from "../contexts/AuthContext";
import Profile from "../LoginRegister/Profile/Profile";

function Nav({ children }) {
  const classes = navStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openPopup, setOpenPopup] = React.useState(false);
  const { currentUser } = useAuth();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          {open ? (
            <>
              (
              <img className={classes.logo} src={logoWhite} alt={"Wiosło"} />
              <IconButton
                onClick={handleDrawerClose}
                edge="start"
                style={{ color: "white" }}
              >
                <ChevronLeftIcon />
              </IconButton>
              )
            </>
          ) : (
              <>
                (
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {
                    // [classes.hide]: open,
                  })}
                >
                  <MenuIcon />
                </IconButton>
              )
            </>
            )}
        </div>
        <List className={classes.backgraundMenu}>
          <ListItem
            button
            component={Link}
            to="/home"
            className={classes.menuTextStyle}
            style={{ marginTop: open ? "2px" : "18px" }}
          >
            <ListItemIcon
              style={{ color: "white" }}
              className={classes.menuTextStyle}
            // style={{ marginTop: open ? "2px" : "18px" }}
            >
              <HomeIcon
                className={classes.menuTextStyle}
              // style={{ marginTop: open ? "2px" : "18px" }}
              />
            </ListItemIcon>
            <ListItemText primary={"Strona Główna"} />
          </ListItem>
          {!currentUser ? (
            <>
              <Login />
              <Signup />
            </>
          ) : (
              <>
                <Profile />

                <ListItem
                  button
                  onClick={() => setOpenPopup(true)}
                  className={classes.menuTextStyle}
                >
                  <ListItemIcon className={classes.menuTextStyle}>
                    <AddBoxIcon className={classes.menuTextStyle} />
                  </ListItemIcon>
                  <ListItemText primary={"Dodaj ofertę"} />
                </ListItem>
              </>
            )}

          <ListItem
            button
            component={Link}
            to="/kayak"
            className={classes.menuTextStyle}
          >
            <ListItemIcon className={classes.menuTextStyle}>
              <RowingIcon className={classes.menuTextStyle} />
            </ListItemIcon>
            <ListItemText primary={"Oferty"} />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/mapa"
            className={classes.menuTextStyle}
          >
            <ListItemIcon className={classes.menuTextStyle}>
              <MapIcon className={classes.menuTextStyle} />
            </ListItemIcon>
            <ListItemText primary={"Mapa"} />
          </ListItem>
          {currentUser && <Logout />}
        </List>
      </Drawer>
      {children}
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <AddNewOfferForm openPopup={openPopup} setOpenPopup={setOpenPopup} />
      </Popup>
    </div>
  );
}

export default Nav;
