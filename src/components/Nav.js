import React,{useState} from "react";
//animation
import {motion} from "framer-motion";
import logo from "../image/logo.svg";
//import redux and routes,reducer,actions
import { searchGame } from "../actions/actionGames";
import { useDispatch } from "react-redux";
//animations
import { fadeIn } from "../animation";


const Nav = ()=>{
    const dispatch = useDispatch();
    const[textInput,setTextInput] = useState("");

    const inputHandler = (e)=>{
        setTextInput(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(searchGame(textInput));
        setTextInput("");
    }

    const clearSearched = ()=>{
        dispatch({type:"CLEAR_SEARCH"});
    }
  return(  
    <motion.nav className="styledNav" variants={fadeIn} initial="hidden" animate="show">
        <motion.div className="Logo" onClick={clearSearched}>
            <img src={logo} alt="logo" />
            <h1>Ignite</h1>
        </motion.div>
        <form className="search">
            <input value={textInput} onChange={inputHandler} type="text" />
            <button onClick={submitHandler} type="submit">Search</button>
        </form>
    </motion.nav>
    )
}

export default Nav;