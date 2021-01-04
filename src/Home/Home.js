import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import ReactPlayer from "react-player/youtube";
import homeImage from "./images/homeImage.jpg";
import paddle from "./images/paddle.png";
import { homeStyles } from "./Home-styles";
import Carousel from "./carousel";
import ScrollAnimation from "react-animate-on-scroll";
import waterfall from "./images/waterfall.gif";
import Typography from "@material-ui/core/Typography";
import logoWhite from "./images/logoWhite.png";

export default function Home() {
  const classes = homeStyles();
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexFlow: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexFlow: "row",
          }}
        >
          <div>
            <img
              src={logoWhite}
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            />

            <img
              src={waterfall}
              // className={classes.homeImage}
              alt={"homeImage"}
              width="100%"
              height="50%"
              style={{
                position: "relative",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                left: "0px",
              }}
            />
          </div>
        </div>
        <div
          className="ChartsHolder"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-300px",
          }}
        >
          <div
            className="playerContainer"
            style={{ display: "flex", width: "500px" }}
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=TAEkR13ChPs"
              stopOnUnmount={false}
              playing="false"
              width="100%"
              height="20em"
              style={{
                display: "flex",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "200px",
            }}
          >
            <PieChart />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <Carousel />
          <BarChart />
        </div>
      </div>
    </div>
  );
}
