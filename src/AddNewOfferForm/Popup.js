import { DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "./Button";
import ActionButton from "./ActionButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useStyles } from "./OfferStyles";
const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#ffffff',
        main: '#ffffff',
        dark: '#ffffff',
    },
    secondary: {
        light: '#ffffff',
        main: '#ffffff',
        dark: '#ffffff',
    },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  }});

export default function Popup(props) {
  const { children, openPopup, setOpenPopup } = props;
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={openPopup} maxWidth="xl">
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
              Dodaj swoją ofertę
            </Typography>

            <ActionButton
             
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <CloseIcon />
            </ActionButton>
          </div>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        
      </Dialog>
    </ThemeProvider>
  );
}
