// imports
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemText, Slide, TextField, Typography, withStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons"; 
import { useEffect, useState } from "react";
import useStyles from "../../utils/styles";  
import Close from  "@material-ui/icons/Close"; 
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Form from "./Form";
import { add, selectActivities } from "../../features/activities/activitiesSlice";
import { useDispatch, useSelector } from "react-redux";
 
export default function Feed() { 
    const classes = useStyles();
    // Data from store
    const activities = useSelector(selectActivities);
    const dispatch = useDispatch();

    //State
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
        enquiry: '',
        url: '',
        notes: ''
    }) 

    //Handlers
    const handleClickOpen = () => {
        setOpen(true);
      };

    const formDataChange = (o) => { 
        setFormData({...formData , ...o}); 
    }
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        dispatch(add(formData));
    };
    

    // Custom Dialog Title with close button
    const DialogTitle = withStyles(theme => ({
        root: {
          borderBottom: `1px solid ${theme.palette.divider}`,
          margin: 0,
          padding: theme.spacing(2),
        },
        closeButton: {
          position: 'absolute',
          right: theme.spacing(2),
          top: theme.spacing(2),
          color: theme.palette.grey[500],
        },
      }))(props => {
        const { children, classes, onClose } = props;
        return (
          <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
              <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                <Close />
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });

    
 
    return ( 
        <>
            <Button 
                startIcon={<Add className={classes.roundedIcons}/>}
                className={classes.buttonAddActivity}
                onClick={handleClickOpen}
            >
                Add new activity
            </Button> 
            <List className={classes.listActivities}> 
                {(activities.length > 0) && activities.map((e, i) => { 
                    return (<ListItem key={i}>
                        <ListItemAvatar>
                        <Avatar className={classes.orange}> AV </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                        primary={
                            <>
                            <b>Ave Vernon added a note:</b> {e.enquiry || ''} {e.url ? (<>(<a href={e.url}>{e.url}</a>)</>) : ''} {e.notes || ''}
                            </>
                        }
                        />
                    </ListItem> )
                })} 
            </List>
            <Dialog
                open={open} 
                keepMounted
                className={classes.dialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add activity
                </DialogTitle>
                <DialogContent>
                    <Box style={{padding: '15px 5px'}}>
                        <Form formDataChange={formDataChange} />
                    </Box>
                </DialogContent>
                <DialogActions style={{justifyContent: 'center'}}>
                    <Button onClick={handleSubmit} variant="contained" color="primary" >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}