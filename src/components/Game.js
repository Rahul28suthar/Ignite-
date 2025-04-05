import React from "react";
//import styles and animation
import {motion} from "framer-motion";

import { useDispatch } from "react-redux";
import {loadDetail} from "../actions/actionDetail";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
//animations
import { popup } from "../animation";

const Game=({name,released,image,id})=>{
    const stringId = id.toString();
    const dispatch = useDispatch();
    const loadDetailHandler = ()=>{
        console.log("Fetching details for game ID:", id); 
        document.body.style.overflow="hidden";
        dispatch(loadDetail(id))
    }
  

   
    return(
        <motion.div variants={popup} initial="hidden" animate="show" layoutId={`card-${stringId}`} className="StyledGame" onClick={loadDetailHandler}>
            <Link to={`games/${id}`}>
            <motion.h3 layoutId={`title-${stringId}`}>{name}</motion.h3>
                <p>Released Date:{released}</p>
                <motion.img layoutId={`image-${stringId}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </motion.div>
    )
}
export default Game;