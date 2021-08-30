import React from 'react';
import styles from './people_list.module.css'
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';



 const PeopleList = ({people})=>{

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        small: {
          width: theme.spacing(3),
          height: theme.spacing(3),
        },
        large: {
          width: theme.spacing(7),
          height: theme.spacing(7),
          color: theme.palette.getContrastText(deepOrange[500]),
          backgroundColor: "#E77A7A",
        },
      }));
      
      const classes = useStyles();

      
    return (
        <div style={{minHeight:"400px",maxHeight:"500px",overflowY:"scroll"}}> 
            {people.map((person=>{
                const{id,name,age,image}=person;
                return(
                    <div className={styles.container} key={id}>
                        <div className={styles.wrapper_horizontal}>
                        <Avatar className={classes.large} >{(person.name[0]).toUpperCase()}</Avatar>

                        <div className={styles.wrapper_vertical}>
                        <h2 className={styles.title}>{name}</h2>
                        <p>{age}</p>
                        </div>
                        </div>
                        <Divider/>
                    </div>
                );
            }))}

        </div>
    );
 }


 export default PeopleList;