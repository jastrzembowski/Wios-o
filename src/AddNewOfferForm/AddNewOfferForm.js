import React, { useState, useEffect } from "react";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import VehiclesModal, { vehiclesModal } from "./VehiclesModal";
import LevelModal from "./LevelModal";
import { useStyles } from "./OfferStyles";
import { default as UUID } from "node-uuid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Button from "./Button";
import { CodeSharp, FontDownload, ImportantDevices } from "@material-ui/icons";
const DATABASE_URL = "https://dancing-app-77d2a.firebaseio.com";

export default class AddNewOfferForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      id: UUID.v4(),
      offer: [
        {
          type: "kajak jednoosobowy",
          numberOfPeople: 1,
          price: "",
        },
        {
          type: "kajak dwuosobowy",
          numberOfPeople: 2,
          price: "",
        },
        {
          type: "kajak group",
          numberOfPeople: 10,
          price: "",
        },
        {
          type: "rowerek 4 osobowy",
          numberOfPeople: 4,
          price: "",
        },
      ],
      level: "",
      location: {},
      imageUrl: "",
      description: "",
    };
    this.initialState = {
      title: "",
      id: UUID.v4(),
      offer: [
        {
          type: "kajak jednoosobowy",
          numberOfPeople: 1,
          price: "",
        },
        {
          type: "kajak dwuosobowy",
          numberOfPeople: 2,
          price: "",
        },
        {
          type: "kajak group",
          numberOfPeople: 10,
          price: "",
        },
        {
          type: "rowerek 4 osobowy",
          numberOfPeople: 4,
          price: "",
        },
      ],
      level: "",
      location: {},
      imageUrl: "",
      description: "",
    };
  }
  handleFormReset = () => {
    this.setState({ state: this.initialState });
    console.log(this.initialState);
  };
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnLocationChange = (event) => {
    this.setState({
      location: {
        ...this.state.location,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleOnPriceChange = (event) => {
    let pricing = this.state.offer.find((offer) => {
      console.log(offer.type);
      return event.target.name === offer.type;
    });
    console.log(pricing);
    pricing.price = event.target.value;
    console.log(this.state);
    this.setState({ offer: [...this.state.offer] });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    fetch(`${DATABASE_URL}/offers.json`, {
      method: "POST",
      body: JSON.stringify(this.state),
    }).then(() => {
      this.props.setOpenPopup();
    });
  };

  render() {
    const { setOpenPopup } = this.props;
    return (
      <form
        className={this.classes}
        onSubmit={this.handleOnSubmit}
        onReset={this.handleFormReset}
        style={{ fontSize: "small" }}
      >
        <div class="diwek" style={{ width: "100%" }}>
          <TextField
            variant="outlined"
            label="Jak się nazywa Twoja firma?"
            value={this.state.title}
            name="title"
            onChange={this.handleOnChange}
            style={{ width: "100%" }}
            required
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 13 } }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            lineHeight: 1.1,
            width: "100%",
            marginTop: "10px",
          }}
        >
          <FormControl component="fieldset" style={{ display: "flex" }}>
            <FormLabel component="legend" style={{ display: "inline" }}>
              Poziom trudności
            </FormLabel>
            <RadioGroup
              aria-label="level"
              name="level"
              value={this.state.level}
              onChange={this.handleOnChange}
              style={{ display: "inline" }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 11 } }}
            >
              <FormControlLabel
                value="łatwy"
                control={<Radio />}
                label="Łatwy"
                inputProps={{ style: { fontSize: 13 } }}
                InputLabelProps={{ style: { fontSize: 11 } }}
              />
              <FormControlLabel
                value="średni"
                control={<Radio />}
                label="Średni"
                inputProps={{ style: { fontSize: 13 } }}
                InputLabelProps={{ style: { fontSize: 11 } }}
              />
              <FormControlLabel
                value="trudny"
                control={<Radio />}
                label="Trudny"
                inputProps={{ style: { fontSize: 13 } }}
                InputLabelProps={{ style: { fontSize: 11 } }}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            lineHeight: 1.1,
            width: "100%",
            marginTop: "10px",
          }}
        >
          <TextField
            variant="outlined"
            label="Cena za kajak jednoosobowy"
            name="kajak jednoosobowy"
            value={this.state.price}
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
            onChange={this.handleOnPriceChange}
            required
          />
          <TextField
            variant="outlined"
            label="Cena za kajak dwuosobowy"
            name="kajak dwuosobowy"
            value={this.state.price}
            style={{ marginLeft: "10px" }}
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
            onChange={this.handleOnPriceChange}
            required
          />
          <TextField
            variant="outlined"
            label="Cena za osobę dla grup"
            name="kajak group"
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
            value={this.state.price}
            style={{ marginLeft: "10px", fontSize: "smaller" }}
            onChange={this.handleOnPriceChange}
            required
          />
          <TextField
            variant="outlined"
            label="Cena za rower wodny"
            name="rowerek 4 osobowy"
            value={this.state.price}
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
            style={{ marginLeft: "10px" }}
            onChange={this.handleOnPriceChange}
            required
          />
          <TextField
            variant="outlined"
            label="Dodaj adres URL zdjęcia"
            value={this.state.imageUrl}
            name="imageUrl"
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
            style={{ marginLeft: "10px" }}
            onChange={this.handleOnChange}
            required
          />
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "center",
            lineHeight: 1.1,
            width: "100%",
            marginTop: "10px",
          }}
        >
          <TextField
            variant="outlined"
            label="W jakim mieście?"
            name="city"
            value={this.state.city}
            onChange={this.handleOnLocationChange}
            required
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
          />
          <TextField
            variant="outlined"
            label="Na jakiej wodzie?"
            value={this.state.river}
            name="river"
            style={{ marginLeft: "10px" }}
            onChange={this.handleOnLocationChange}
            required
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
          />
          <TextField
            variant="outlined"
            label="Podaj kod pocztowy."
            value={this.state.postalCode}
            style={{ marginLeft: "10px" }}
            name="postalCode"
            onChange={this.handleOnLocationChange}
            required
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
          />
          <TextField
            variant="outlined"
            label="Na jakiej ulicy?"
            value={this.state.street}
            style={{ marginLeft: "10px" }}
            onChange={this.handleOnLocationChange}
            required
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
            name="street"
          />
          <TextField
            variant="outlined"
            label="Jaki jest numer lokalu?"
            value={this.state.streetNumber}
            style={{ marginLeft: "10px" }}
            onChange={this.handleLocationOnChange}
            name="streetNumber"
            required
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
          />
        </div>

        <div style={{ display: "flex", width: "100%" }}>
          <TextField
            variant="outlined"
            label="Opisz swoje miejsce"
            value={this.state.description}
            style={{ marginTop: "10px", width: "100%" }}
            onChange={this.handleOnChange}
            name="description"
            required
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 11 } }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            component="div"
            type="submit"
            text="Dodaj"
            style={{
              width: "100px",
              margin: "3px",
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(15, 4, 35)",
            }}
            onClick={this.handleOnSubmit}
          />
          <Button
            component="div"
            type="reset"
            color="primary"
            text="Resetuj"
            style={{
              width: "100px",
              margin: "3px",
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(15, 4, 35)",
            }}
            onClick={this.handleFormReset}
          />
        </div>
      </form>
    );
  }
}
