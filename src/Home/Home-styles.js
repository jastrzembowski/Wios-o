import { makeStyles } from '@material-ui/core/styles';
import homeImage from "./images/homeImage.jpg";
import paddle from "./images/paddle.png";
export const homeStyles = makeStyles((theme) => ({
    section: {
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    homeImage: {
        display: 'flex',
        // width: "600px",
        // height: "400px",
        // objectFit: "cover",
        pointerEvents: "none"
    }
    // paddle: {
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     width: "100%",
    //     height: "100%",
    //     objectFit: "cover",
    //     pointerEvents: "none"
    }

))