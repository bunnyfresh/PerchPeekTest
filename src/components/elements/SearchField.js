// imports
import { TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "../../utils/styles";
 
export default function SearchField() { 
    const classes = useStyles();
    return ( 
        <>
            <IconButton position='start'>
                <SearchIcon />
            </IconButton>
            <TextField
                className={classes.searchField}
                label="Search..." 
                InputProps={{
                    className: classes.notchedOutline, 
                  }}
            />
        </>
        );

    }