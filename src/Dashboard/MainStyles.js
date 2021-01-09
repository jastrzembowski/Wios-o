import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 198;

export const mainStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
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
    minHeight: "96vh",
    width: "80vw",
    background: 'linear-gradient(355deg, rgba(255,255,255,0.8575805322128851) 3%, rgba(210,245,255,1) 54%, rgba(227,244,255,1) 100%)'
    
  },

}));