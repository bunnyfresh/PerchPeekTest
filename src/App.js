import React from 'react'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import SideMenu from './components/SideMenu'; 
import './App.css';
import useStyles from './utils/styles';
import { AppBar, Avatar, Box, Toolbar } from '@material-ui/core';
import SearchField from './components/elements/SearchField';
import avatar from './assets/avatar.png';
import ClientBox from './components/ClientBox';
import TabNav from './components/TabNav'; 
 
function App() {

  // Use style object for react
  const classes = useStyles();

  return (
    <div className="App">
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar> 
              <SearchField  /> 
              <Avatar className={classes.avatar}  alt="Remy Sharp" src={avatar} /> 
        </Toolbar>
        
      </AppBar> 
      <SideMenu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box fontWeight="bold" fontSize="25px" margin="25px 0">Remy Sharp</Box>
        <ClientBox />
        <TabNav /> 
      </main>
    </div>
    </div>
  );
}

export default App;
