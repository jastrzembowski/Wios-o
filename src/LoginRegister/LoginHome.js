import Dialog from "@material-ui/core/Dialog";
import React, { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Button, Divider, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { navStyles } from "../Navigacja/nav-styles"
import PersonIcon from "@material-ui/icons/Person";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("")
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openPassword, setOpenPassword] = React.useState(false)
  const [message, setMessage] = useState("");
  const history = useHistory();
  const classes = navStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePasswordOpen = () => {
    setOpenPassword(true);
  };

  const handlePasswordClose = () => {
    setOpenPassword(false);
  };


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      handleClose();
      setMessage("Pomyślnie zalogowano!");
      history.push("/kayak");
    } catch {
      setError("Sprawdź adres email lub hasło");
    }
    setLoading(false);
  }
  async function handleSubmitReset(e) {
    e.preventDefault();

    try {
      setPassError("");
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Sprawdź swoją skrzynkę pocztową!");
    } catch {
      setPassError("Nie udało się zresetować hasła");
    }
    setLoading(false);
  }
  

  return (
    <>
    

    <Button 
    onClick={handleClickOpen}
    style={{
        width: "250px",
        height: "70px",
        border: "solid",
        borderColor: "white",
        color: "white",
        fontSize: "25px",
        padding: "2px",
        marginRight: "10px"
    }}
>
    Logowanie
    </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Card style={{minWidth: "550px",minHeight: "300px"}}>
          <Card.Body>
            <h2 style={{ color: "#151818", fontFamily: 'Anton' }} className="text-center mb-4">
              LOGOWANIE
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form style={{ color: "black" }} onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required ref={emailRef} />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Hasło</Form.Label>
                <Form.Control type="password" required ref={passwordRef} />
              </Form.Group>
              <Button
                disabled={loading}
                variant="contained"
                size="large"
                style={{    backgroundColor: "#151818", color: "white" }}
                className="w-100"
                type="submit"
              >
                Zaloguj się
              </Button>
              <dividers />
              <div
                style={{ display: "flex", 
                justifyContent: "center",
                cursor: "pointer",
                marginTop: "6px"
              }}
                onClick={() => handlePasswordOpen()}
              >
                Nie pamiętasz hasła? Kliknij tu!
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Dialog>
      <Dialog
        open={openPassword}
        onClose={handlePasswordClose}
        aria-labelledby="form-dialog-title"
      >
        <Card style={{minWidth: "550px",minHeight: "250px"}}>
          <Card.Body>
            <h2 style={{ color: "black" }} className="text-center mb-4">
              RESETUJ HASŁO
            </h2>
            <Form style={{ color: "black" }} onSubmit={handleSubmitReset}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required ref={emailRef} />
              </Form.Group>
              {passError && <Alert variant="danger">{passError}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Button
                disabled={loading}
                variant="contained"
                size="large"
                style={{ backgroundColor: "rgb(0,0,0)", color: "white" }}
                className="w-100"
                type="submit"
              >
                Wyślij
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Dialog>
    </>
  );
}
