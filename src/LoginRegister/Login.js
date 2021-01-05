import Dialog from "@material-ui/core/Dialog";
import React, { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <>
     
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleClickOpen}
        dividers
        style={{ marginRight: "3px", backgroundColor: "white" }}
      >
        Logowanie
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Card>
          <Card.Body>
            <h2 style={{ color: "black" }} className="text-center mb-4">
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
              {message && <Alert variant="success">{message}</Alert>}
              <Button
                disabled={loading}
                variant="contained"
                size="large"
                style={{ backgroundColor: "rgb(0,0,0)", color: "white" }}
                className="w-100"
                type="submit"
              >
                Zaloguj się
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Dialog>
    </>
  );
}
