 
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import useStyles from "../../utils/styles";  
import React from 'react';

 
export default function Form(props) { 
    const classes = useStyles(); 
    const [enq, setEnq] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [notes, setNotes] = React.useState('');


    // Change form data props (prepaid data to redux store)
    const handleChange = (event) => { 
        if(event.target.id == 'url'){
            props.formDataChange({url: event.target.value});
            setUrl(event.target.value);
        }else if(event.target.id == 'notes'){
            props.formDataChange({notes: event.target.value});  
            setNotes(event.target.value);
        }else{ 
            props.formDataChange({enquiry: event.target.value});
            setEnq(event.target.value);
        }  
    };
 
    return ( 
        <>
            <div className={classes.m10}>
            <FormControl variant="outlined" className={classes.formControlSelect}> 
                    <InputLabel id="demo-simple-select-outlined-label">Add Enquiry</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="enq"
                        value={enq}
                        onChange={handleChange}
                        label="Add Enquiry"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'test@test.test'}>test@test.test</MenuItem>
                        <MenuItem value={'test2@test.test'}>test2@test.test</MenuItem>
                        <MenuItem value={'test3@test.test'}>test3@test.test</MenuItem>
                    </Select> 
            </FormControl>
            </div>

            <div className={classes.m10}>
                <TextField defaultValue={url} id="url" onChange={handleChange} className={classes.formControlSelect} label="Add property URL (optional)" variant="outlined" />
            </div> 

            <div className={classes.m10}>
                <TextField 
                    onChange={handleChange}
                    id="notes" 
                    className={classes.formTextarea} 
                    label="Add notes"
                    defaultValue={notes}
                    multiline
                    rows="4" 
                    variant="outlined" /> 
            </div> 
        </>
    );
}