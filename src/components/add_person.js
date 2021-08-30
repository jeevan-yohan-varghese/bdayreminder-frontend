import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './add_person.module.css';
import { makeStyles } from '@material-ui/core/styles';

const AddPerson = ()=>{

    const useStyles = makeStyles((theme) => ({
        input: {
          marginTop:theme.spacing[4],
          marginBottom: theme.spacing[4],
          fontSize: 20,
        },
        
      }));
      const classes = useStyles();
    

    
    return(
        <div>
            <form className={styles.form}>
                <TextField id="outlined-basic" label="Name" variant="outlined" className={classes.input} /><br></br>
                <TextField
                id="date"
                label="DOB"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                    shrink: true,
                }}
                className={classes.input}
                /><br></br>
                <Button variant="contained" color="primary" className={classes.input}>Add</Button>
            </form>

        </div>
    )
}

export default AddPerson;