import React, { useRef, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Form, Card, Alert } from "react-bootstrap";
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
import { useAuth } from "../../contexts/AuthContext";

export default function Profile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const classes = navStyles();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, updatePassword, updateEmail } = useAuth();
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
  var name = currentUser.email.substring(0, currentUser.email.indexOf("@"));

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
    setMessage("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        setMessage("Pomyślnie zaaktualizowano konto!");
      })
      .catch(() => {
        setError("Problem z zaaktualizowaniem konta");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div>
      <React.Fragment key={"right"}>
        <ListItem
          button
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
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              flexFlow: "column",
            }}
          >
            <h1
              style={{
                fontSize: "90px",
                marginTop: "23%",
                fontFamily: "Anton",
              }}
            >
              Witaj {name} !
            </h1>
            <h1 style={{ fontSize: "50px", marginTop: "40px" }}>
              <b>Edytuj profil</b>
            </h1>
            <Form style={{ color: "black" }} onSubmit={handleSubmit}>
              <Form.Group
                id="email"
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                }}
              >
                <Form.Label style={{ fontSize: "30px" }}>Nowy email</Form.Label>
                <Form.Control
                  type="email"
                  style={{ padding: "25px" }}
                  ref={emailRef}
                />
              </Form.Group>
              <Form.Group
                id="password"
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                }}
              >
                <Form.Label style={{ fontSize: "30px" }}>Nowe hasło</Form.Label>
                <Form.Control
                  type="password"
                  style={{ padding: "25px" }}
                  ref={passwordRef}
                />
              </Form.Group>
              <Form.Group
                id="password-confirm"
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                }}
              >
                <Form.Label style={{ fontSize: "30px" }}>
                  Potwierdź hasło
                </Form.Label>
                <Form.Control
                  type="password"
                  style={{ padding: "25px" }}
                  ref={passwordConfirmRef}
                />
              </Form.Group>
              <Button
                disabled={loading}
                variant="contained"
                size="large"
                style={{ backgroundColor: "#151818", color: "white", padding: "18px", fontSize: "25px" }}
                className="w-100"
                type="submit"
                
              >
                Zapisz zmiany
              </Button>
            </Form>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
