import { makeStyles } from '@material-ui/core/styles';
import HomeImageBackgraund from '../img/app_5.jpg';

const drawerWidth = 220;

export const navStyles = makeStyles((theme) => ({ 
  
    root: {
      display: 'flex',
      
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - 160px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      height: "100%"
    },
    drawerProfile: {
      width: "500px",
      flexShrink: 0,
      whiteSpace: 'nowrap',
      height: "100%"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerOpenPerson: {
      width: "500px",
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    prawo:{
      color: "black"
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // padding: theme.spacing(0, 1),
      backgroundColor: "#151818",
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      width: '100%',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),      
    },
    logo: {
      margin: 'auto',
      width: '110px',
    },
    backgraundMenu: {
      background: "#151818",
      height: "100%",
    },
    menuTextStyle: {
      color: 'rgb(255,255,255)',
      margin: '18px 0 ',
      "&:hover": {
        color: "white",
      }
    },
    newButton : {
      // position : "absolute",
      // right : " 10px ",
      backgroundColor: "rgb(255,255,255)",
      "&:hover": {
        color: "black",
        backgroundColor: "#C1CCD6"
      }
    },
    loginButton: {
      display: 'flex',
      color: 'white',
    },
    personLogin: {
      height: '100%',
      color: 'white',
      backgroundColor: 'none',
      display: 'flex',
      justifyContent: 'center',
    }
}));
