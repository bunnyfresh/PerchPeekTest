import React from 'react'; 
import Drawer from '@material-ui/core/Drawer'; 
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem'; 
import ListItemText from '@material-ui/core/ListItemText'; 
import useStyles from '../utils/styles';
import logo from '../assets/logo.png';
import { Typography } from '@material-ui/core';
  
export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return ( 
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <img src={logo} className="logo" alt="logo"/>
        <div className={classes.toolbar} />
        <Divider className={classes.whiteDevider} />
        <List>
          {['Overview'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider className={classes.whiteDevider} />
        <div className={classes.toolbar}>
          <Typography className={classes.menuLabel} displayblock="true" paragraph noWrap>
            Manage
          </Typography>
        </div>
        <List>
          {['Users', 'Properties', 'Viewings' , 'Support'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider className={classes.whiteDevider} />
        <div className={classes.toolbar}>
          <Typography className={classes.menuLabel} displayblock="true" paragraph noWrap>
            Get Help
          </Typography>
        </div>
        <List>
          {['Knowledge Base'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer> 
  );
}