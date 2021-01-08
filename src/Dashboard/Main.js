import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { mainStyles } from "./MainStyles";
import Map from "../Maps/Map";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Home from "../Home/Home";
import OfferCards from "../Offers/OfferCards";
import Button from "@material-ui/core/Button";
import RedirectToHome from "../Navigacja/RedirectToHome";
import Profile from "../LoginRegister/Profile/Profile";

function Main() {
  const classes = mainStyles();
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <main className={classes.content}>
      <Switch>
        <Route path="/profile" component={Profile} />
        <RedirectToHome exact path="/" />
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        {/* 
                    <Route path = '/ulubione'>
                    <Typography paragraph> Ulubione </Typography>
                  </Route> */}

        <Route path="/kayak">
          <OfferCards />
        </Route>

        <Route path="/mapa">
          <div style={{ width: "100%", height: "87vh" }}>
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABXq7l1yJ16e4DGL-Wpup5WJ_AlIJdISk`}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          </div>
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
