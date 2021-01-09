import React from "react";
import { useAuth } from "../contexts/AuthContext";
import LoginHome from "./LoginHome";
import SignupHome from "./SignupHome";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button"
export default function ButtonHolder() {
  const { currentUser } = useAuth();
  return (
    <div>
      <>
        {!currentUser ? (
          <>
            <LoginHome />
            <SignupHome />
          </>
        ) : (
          <>
          <h1>{currentUser.displayName}</h1>
          <Button 
          style={{
            width: "450px",
            height: "70px",
            border: "solid",
            borderColor: "white",
            backgroundColor: "white",
            color: "none",
            fontSize: "24px",
            padding: "2px",
            marginRight: "10px"
        }} component={Link} to="/kayak">
            Sprawdź najnowsze oferty </Button>
            </>
        )}
      </>
    </div>
  );
}
