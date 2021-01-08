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
    background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(210,250,250,1) 100%)'
    
  },

}));