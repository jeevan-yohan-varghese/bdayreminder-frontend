import './App.css';
import React,{useState} from 'react';
import Data from './components/data';
import PeopleList from './components/people_list';
import Header from './components/header';
import BirthdayCard from './components/birthday_card';
import Footer from './components/footer';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddPerson from './components/add_person';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';




function App() {
  const [array,setArray]=useState(Data);
  const [searchInput, setSearchInput]=useState('');
  const [filteredArray,setFilteredArray]=useState(array);
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fab:{
      position:'fixed',
      bottom:20,
      right:20,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius:10,
      width:500,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();

  //modal close and open
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //****************
  
  const searchPeople=(searchTerm)=>{
      setSearchInput(searchTerm);
      if(searchInput !== ''){
      const filteredData = array.filter((item)=>{
        return item.name.toLowerCase().search(searchInput.toLowerCase())!== -1;
      });
      setFilteredArray(filteredData)
    }else{
      setFilteredArray(array);
    }
  }


  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Header/>
      <div className="wrapper_horizontal width_70">
        <BirthdayCard people={array}/>
        <div className="card width_40">
        <div className="card_header">
          <h1>Upcoming</h1>
        </div>
        <PeopleList people={array}/>
        </div>
        </div>
      <div className="card width_70">
        <div className="card_header">
          <h1>People</h1>
          <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e)=>searchPeople(e.target.value)}/>
         
        </div>
        
     {searchInput.length>0?<PeopleList people={filteredArray}/>:<PeopleList people={array}/>}
      </div>
      <Fab color="primary"  className={classes.fab} onClick={handleOpen} aria-label="add">
        <AddIcon />
      </Fab>
      <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 id="transition-modal-title">Add Person</h1>
            <AddPerson/>
            </div>
        </Fade>
      </Modal>
      <Footer/>
    </div>
  );
}

export default App;
