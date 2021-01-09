import { CardActions, CardContent } from "@material-ui/core";
import React, { useState, forwardRef } from "react";
import Card from "@material-ui/core/Card";
import Button from "../AddNewOfferForm/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import './offers.css'


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OfferCard(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const difficultyLevel = (level) => {
    let color = '';
    let stars = '';

    if(level==='łatwy') { 
      color = 'green';
      stars = '★☆☆';
    }

    if(level==='średni') { 
      color = 'orange';
      stars = '★★☆';
    }

    if(level==='trudny') { 
      color = 'red';
      stars = '★★★';
    }
    return (
        <p
        style={{
          textAlign: "center",
          margin: "2px",
        }}
      >
        Poziom trudności: <span
        style={{
          fontSize: '1.5rem',
          color: `${color}`
        }}>
          {stars}
        </span>
      </p>
    )
};

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: 'center',
      }}
    >
      <Card
        className="OffersContainer"
        style={{
          width: "100%",
          height: "100%",
          margin: "8px",
          maxWidth: '360px',
        }}
      >
        <CardContent style={{      height: "70%",}}>
          <h2
            className="title"
            style={{
              fontSize: '25px',
              marginTop: "-2px",
              lineHeight: '20px',
        
              textAlign: "center",
              marginBottom: "25px",
              fontFamily: 'Anton'
            }}
          >
            {props.offer.title}
          </h2>

          {difficultyLevel(props.offer.level)}
          <div className="imgContainer">
            <img
              src={props.offer.imageUrl}
              className="offerImage"
              alt="offerImage"
              style={{
                width: "100%",
                height: "180px",
              }}
            />
          </div>
        </CardContent>
        <CardActions className="cardActions" style={{ display: "grid" }}>
          <div style={{
            height: "100%",
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            paddingTop: "16px"

          }}>
          <Button
            text="Zobacz więcej!"
            variant="contained"
            type="submit"
            onClick={handleClickOpen}
            style={{
              marginBottom: '5px',
              backgroundColor: "#151818",
              color: 'white'
            }}
          />
          </div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              <h1
                style={{
                  fontFamily: 'Anton',
                  textAlign: "center",
                  marginTop: "3px",
                  marginBottom: "0px",
                }}
              >
                {" "}
                {props.offer.title}
              </h1>
            </DialogTitle>
            <DialogContent>
              <img
                src={props.offer.imageUrl}
                className="offerImage"
                alt="offerImage"
                style={{
                  width: "100%",
                  height: "350px",
                }}
              />
              <DialogContentText>
                <b>Poziom trudności:</b> {props.offer.level}
                <br />
                <b>Adres:</b> {props.offer.location.city} ul.{" "}
                {props.offer.location.street}{" "}
                {props.offer.location.streetNumber},{" "}
                {props.offer.location.postalCode}
                <br />
                <b>Opis miejsca:</b> {props.offer.description}
                <br />
                <b>Oferta:</b>
                <br />
                {props.offer.offer[0].type} - {props.offer.offer[0].price} zł
                <br />
                {props.offer.offer[1].type} - {props.offer.offer[1].price} zł
                <br />
                {props.offer.offer[2].type} - {props.offer.offer[2].price} zł
                <br />
                {props.offer.offer[3].type} - {props.offer.offer[3].price} zł
                <br />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                text="Zobacz na mapie"
                component={Link}
                to="/mapa"
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "#151818",
                  color: "white"
                }}
              />
              <Button
                onClick={handleClose}
                variant="outlined"
                color="primary"
                text="Wróć"
                style={{
                  width: "100px",
                  height: "50px",
                  backgroundColor: "#151818",
                  color: 'white'
                }}
              />
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    </div>
  );
}
