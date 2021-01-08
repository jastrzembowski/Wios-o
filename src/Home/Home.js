import React, { Component } from "react";
import bg1 from "./images/bg1.jpg";
import bg2 from "./images/bg2.jpg";
import bg3 from "./images/bg3.jpg";
import bg4 from "./images/bg4.jpg";
import Typography from "@material-ui/core/Typography";
import LoginHome from "../LoginRegister/LoginHome"
import SignupHome from "../LoginRegister/SignupHome"
import ButtonHolder from "../LoginRegister/ButtonHolder"
export default class Home extends Component {


  constructor(props) {
    super(props);

    this.state = {
      bgStyle: {
        height: "100vh",

        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingRight: "100%",
      }
    };
  }

  componentWillMount() {
    const pictureArray = [bg1, bg2, bg3, bg4];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];


    this.setState({
      bgStyle: {
        background: `url(${selectedPicture})`,
        height: "100vh",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignContent: "center",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingRight: "100%",
      }
    });
  }

  render() {
    return (
      <div style={this.state.bgStyle} className="bg">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "25vw",
            width: "45vw",
          }}
        >
          <h1 style={{fontFamily: 'Anton', fontSize:'90px', color: 'white'}} 
          >
            ROZPOCZNIJ PRZYGODĘ
          </h1><br/>
          <ButtonHolder/>
        </div>
      </div>
    );
  }
}
