import { deepOrange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import config from '../config';

const drawerWidth = config.drawerWidth;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px) !important`,
      marginLeft: drawerWidth,
      borderBottom: '2px solid #cacaca',
      backgroundColor: '#fff !important',
      boxShadow: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    searchField: {
      marginBottom: '13px !important'
    },
    notchedOutline: { 
      '&::after' : {
        border: 'none !important'
      } ,
      '&::before' : {
        border: 'none !important'
      } 
    },
    drawerPaper: {
      width: drawerWidth,
      padding: theme.spacing(2), 
      backgroundColor: '#4f93f4',
      color: '#fff'
    },
    whiteDevider: {
      backgroundColor: '#fff'
    },
    menuLabel: {
      textTransform: 'uppercase',
      color: '#e3e3e3',
      paddingTop: '25px',
      paddingLeft: '15px',
      fontWeight: 'bold',
      textAlign: 'left'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar, 
    content: {
        textAlign: 'left',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      }, 
    avatar: {
      position: 'absolute !important',
      right: '50px'
    } ,
    clientBoxWrapper: {
      padding: '20px',
      position: 'relative',
      width: '600px',
      '& .MuiGrid-container':{
        alignItems: 'center'
      },
      marginBottom: '50px'
    },
    clientCity: {
      marginLeft: '5px !important',
      marginTop: '-1px !important',  
      color: 'blue',
      fontWeight: 'bold'
    },
    rightPosition: {
      position: 'absolute !important',
      right: '5px',
      position: 'absolute !important',
      top: '20px', 
    },
    p3: {
      padding: theme.spacing(3),
    }, 
    mainTabs: {
      '& button': {
        color: '#333',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: 0,
        width: 'auto',
        minWidth: 'inherit',
        marginRight: '50px',
        '& span': {
          alignItems: 'flex-start'
        }
      },
      '& .MuiTabs-indicator': {
        justifyContent: 'flex-start'
      },
      
    },
    roundedIcons: { 
      fill: '#fff !important',  
      backgroundColor: '#4f93f4', 
      borderRadius: '100%',  
    },
    buttonAddActivity: {
      '& span': {
        textTransform: 'capitalize',
        fontWeight: 'bold'
      } 
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]) +' !important',
      backgroundColor: deepOrange[500] +' !important',
    },
    listActivities: {
      '& li': {
        border: '1px solid #e7e7e7',
        borderRadius: '5px',
        padding: '10px 15px'
      } 
    },
    dialog: {
      '& .MuiDialog-paperWidthSm': {
        width: '600px'
      }, 
      '& .MuiDialogTitle-root': {
        background: 'red'
      }, 
      '& h6': {
        color: '#fff'
      }, 
      '& svg': {
        fill: '#fff'
      }  
    },
    formControlSelect: { 
      minWidth: '300px  !important', 
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    m10:{
      marginBottom: theme.spacing(2),
    },
    formTextarea: {
      minWidth: '500px !important', 
    }

  }));

  export default useStyles;