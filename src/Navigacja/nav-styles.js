import { makeStyles } from '@material-ui/core/styles';
import HomeImageBackgraund from '../img/app_5.jpg';

const drawerWidth = 198;

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
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
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
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    prawo:{
      color: "red"
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
      justifyContent: 'flex-start',
      padding: theme.spacing(0, 1),
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
      width: '85px',
    },
    backgraundMenu: {
      backgroundImage: `url(${HomeImageBackgraund})`,
      height: "100%",
    },
    menuTextStyle: {
      color: 'white',
      margin: '26px 0 ',
    },
    newButton : {
      position : "absolute",
      right : " 10px ",
      backgroundColor: "rgb(255,255,255)"
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
