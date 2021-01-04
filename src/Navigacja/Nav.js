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
import LogoWioslo from "../img/logo_wioslo.png";
import HomeIcon from "@material-ui/icons/Home";
import RowingIcon from "@material-ui/icons/Rowing";
import MapIcon from "@material-ui/icons/Map";
import { navStyles } from "./nav-styles";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../AddNewOfferForm/Popup";
import AddNewOfferForm from "../AddNewOfferForm/AddNewOfferForm";
import Button from "../AddNewOfferForm/Button";

function Nav({ children }) {
  const classes = navStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openPopup, setOpenPopup] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar
            style={{
              backgroundColor: "rgb(0, 0, 0)",
            }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>

            <Button
              text="Dodaj ofertę"
              color="secondary"
              variant="contained"
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => setOpenPopup(true)}
            />

   
          </Toolbar>
        </AppBar>
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
            <img className={classes.logo} src={LogoWioslo} alt={"Wioło"} />
            <IconButton onClick={handleDrawerClose} className={classes.prawo}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon className={{ prawo: classes.prawo }} />
              ) : (
                <ChevronLeftIcon className={classes.prawo} />
              )}
            </IconButton>
          </div>
          <List className={classes.backgraundMenu}>
            <ListItem
              button
              component={Link}
              to="/home"
              className={classes.menuTextStyle}
            >
              <ListItemIcon className={classes.menuTextStyle}>
                <HomeIcon className={classes.menuTextStyle} />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
            {/*             
            <ListItem button component = {Link} to = '/ulubione' className={classes.menuTextStyle}>
              <ListItemIcon className={classes.menuTextStyle}>
                <FavoriteIcon className={classes.menuTextStyle}/>
              </ListItemIcon>
              <ListItemText primary={'Ulubione'} />
              </ListItem> */}

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
