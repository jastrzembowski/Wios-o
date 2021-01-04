import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      margin: theme.spacing(1),
      margin: 0,
      padding: 0,
    },
    "& .MuiGrid-item": {
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      margin: 0,
      padding: 0,
    },
    "& .MuiGrid-grid-xs-6": {
      flexBasis: "100%",
      maxWidth: "100%",
    },
    "& .LevelButton": {
      padding: "18.5px 14px",
      font: "inherit",
      borderRadius: "4px",
      fontSize: "1rem",
      borderWidth: "1px",
      borderColor: "rgba(0, 0, 0, 0.23)",
      color: "rgba(0, 0, 0, 0.50)",
    },
    "& ButtonAdd": {
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center",
    },
    "& .MuiFormLabel-root-147": {
      fontSize: "smaller"
    },
    "& ButtonReset": {
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center",
    },
    "& .diwek": {
      display: "grid",
      width: "100%",
    },
    "& .MuiOutlinedInput-input":{
    },
  
  },
}));
