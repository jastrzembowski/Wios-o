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
    padding: theme.spacing(3),
    height: "800px",
    background: 'linear-gradient(355deg, rgba(227,247,244,0.8575805322128851) 9%, rgba(129,164,195,1) 64%, rgba(166,226,198,1) 100%)'
    
  },

}));