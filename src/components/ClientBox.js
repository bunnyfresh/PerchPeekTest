import { Avatar, Grid, IconButton, Link, Paper, TextField, Typography } from "@material-ui/core"; 
import useStyles from "../utils/styles";
import avatar from '../assets/avatar.png';
import KeyboardArrowDown from  "@material-ui/icons/KeyboardArrowDown"; 

export default function ClientBox() { 
    const classes = useStyles();
    

    return ( 
        <>
            <Paper className={classes.clientBoxWrapper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar  alt="Jerry" src={avatar} /> 
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>Moving to 
                            <Link
                                component="button"
                                variant="body2"
                                className={classes.clientCity}
                                onClick={() => {
                                    alert("Redirect :)");
                                }}
                                >
                                    Berlin, Germany
                            </Link>
                            <IconButton  color="#fff" className={classes.rightPosition} position='start'>
                                <KeyboardArrowDown style={{fill: '#fff',  backgroundColor: '#4f93f4' , borderRadius: '100%'}}  />
                            </IconButton>
                        </Typography>
                    </Grid>
                </Grid>
              
            </Paper>
        </>
        );

    }