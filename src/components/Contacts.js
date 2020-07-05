import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato"
        },
        "& label": {
            color: "tan"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
            borderColor: "tan"
        },
        "&:hover fieldset": {
            borderColor: "tan"
        },
        "& .Mui-focused fieldset": {
            borderColor: "tan"
        }
        }
    }
})(TextField);

const Contacts = () => {
    return (
        <Box component="div">
            <Grid container justify="center">
                <Box component="form">
                    <Typography variant="h5">
                        Connect with me...
                    </Typography>
                    <InputField 
                      fullWidth={true} label="Name" variant="outlined" 
                    />
                    <InputField 
                      fullWidth={true} label="Email" variant="outlined" 
                    />
                    <InputField 
                      fullWidth={true} label="Company" variant="outlined" 
                    />
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
