import Dialog from "@material-ui/core/Dialog";
import React, { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@material-ui/core";
import {useHistory} from "react-router-dom"

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const history = useHistory();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setMessage("")
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      handleClose()
      setMessage("Pomyślnie założono konto!")
      history.push("/kayak")
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <>
      {message && <Alert variant="success">{message}</Alert>}
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleClickOpen}
        dividers
        style={{ marginRight: "3px", backgroundColor: "white" }}
      >
        Rejestracja
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Card>
          <Card.Body>
            <h2 style={{ color: "black" }} className="text-center mb-4">
REJESTRACJA            </h2>
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
              <Form.Group id="password-confirm">
                <Form.Label>Potwierdź hasło</Form.Label>
                <Form.Control
                  type="password"
                  required
                  ref={passwordConfirmRef}
                />
              </Form.Group>
              <Button
                disabled={loading}
                variant="contained"
                size="large"
                style={{backgroundColor: "rgb(0,0,0)", color: "white"}}
                className="w-100"
                type="submit"
              >
Zarejestruj się              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Dialog>
    </>
  );
}
