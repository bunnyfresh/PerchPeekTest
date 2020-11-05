import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import useStyles from '../utils/styles';
import { Box } from '@material-ui/core';
import Feed from './elements/Feed';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

// Custom Tab Panel
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box paddingTop='25px'>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
 

export default function TabNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  // Change tabs handler
  const handleChange = (event, newValue) => {
    setValue(newValue); 
  };

  return (
    <> 
        <StyledTabs className={classes.mainTabs} value={value} onChange={handleChange} aria-label="styled tabs example">
            <StyledTab label="Activity Feed" />
            <StyledTab label="Stats" />
            <StyledTab label="Documents" />
        </StyledTabs>
        <TabPanel value={value} index={0}>
            <Feed />
        </TabPanel>
        <TabPanel value={value} index={1}>
           Data not available .
        </TabPanel>
        <TabPanel value={value} index={2}>
            Data not available .
        </TabPanel>
    </>
  );
}