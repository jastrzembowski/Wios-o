import React, {useState} from "react";
import { Button } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Logout() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [message, setMessage] = useState("")

  async function handleLogout() {

    try {
        setError('')
        setMessage("Pomyślnie wylogowano!")
      await logout();
      history.push("/Home");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={()=> handleLogout()}
        dividers
        style={{ marginRight: "3px", marginLeft: "3px", backgroundColor: "white" }}
      >
        Wyloguj się
      </Button>
    </div>
  );
}
