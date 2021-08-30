import React,{ useState } from 'react';
import styles from './birthday_card.module.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const BirthdayCard =({people})=>{
    const[index,setIndex]=useState(0);
    const{id,name,age,image}=people[index];

    const Previous=()=>{
        let newIndex =index-1;
        return setIndex(CheckNum(newIndex));
    };
    const Next=()=>{
        let newIndex =index+1;
       return setIndex(CheckNum(newIndex));
    };
    const CheckNum=(number)=>{

        if (number > people.length - 1) {
            return 0;
          }
          if (number < 0) {
            return people.length - 1;
          }
          return number;
    }
    
    return(
      
        <div className={styles.birthday_card}>
        <button onClick={Previous}><ArrowBackIosIcon/></button>
        <div>
            <h1>Happy<br></br>Birthday</h1>
        <h1>{name}</h1>

        </div>
        
        <button onClick={Next}><ArrowForwardIosIcon/></button>
        </div>
    );

}

export default BirthdayCard;