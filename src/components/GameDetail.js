import React from "react";
//animations
import {motion} from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
//import images
import apple from "../image/apple.svg";
import gamepad from "../image/gamepad.svg";
import nintendo from "../image/nintendo.svg";
import playstation from "../image/playstation.svg";
import starempty from "../image/star-empty.png";
import starfull from "../image/star-full.png";
import steam from "../image/steam.svg";
import xbox from "../image/xbox.svg";



const GameDetail=({pathId})=>{
    const {game,screen,isLoading} = useSelector((state=>state.detail));
    const navigate = useNavigate();
    const exitEventHandler=(e)=>{
        const element = e.target;
        if(element.classList.contains("shadow")){
            document.body.style.overflow = "auto";
            navigate("/");
        }
    }
    //rating stars function 
    const starRating=()=>{
        const stars = [];
        const rating = Math.floor(game.rating)
        for(let i=1;i<=rating;i++){
            if(i<=rating){
                stars.push(<img alt="stars" key={i} src={starfull}/>)
            }
            else{
                stars.push(<img alt="stars" key={i} src={starempty}/>)
            }
        }
        return stars;
    }
    //platforms images function
    const platformImage=(platform)=>{
        switch(platform){
            case "PlayStation 5":
                return playstation;
            case "Xbox Series S/X":
                return xbox;
            case "PC":
                return steam;
            case "iOS":
                return apple;
            case "Nintendo Switch":
                return nintendo;
            case "PlayStation 4":
                return playstation;
            default:
                return gamepad;                       
        }
    }
        return (
        <>
        {!isLoading&&(
        <motion.div onClick={exitEventHandler} className="cardShadow shadow"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { duration: 0.3 } }} 
        exit={{ opacity: 0, transition: { duration: 0.3 } }}>
            <motion.div layoutId={`card-${pathId}`} className="detail" 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }} 
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}>
                <motion.div className="stats">
                    <div className="rating">
                    <motion.h3 layoutId={`title-${pathId}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                        {starRating()}
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {game.platforms?.map((data) => (
                               <img  key={data.platform.id} src={platformImage(data.platform.name)} alt={data.platform.name} />
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div className="media">
                <motion.img layoutId={`image-${pathId}`} src={smallImage(game.background_image, 1280)} alt="game" />
                </motion.div>
                <motion.div className="description">
                    <p>{game.description_raw}</p>
                </motion.div>
                <motion.div className="gallery">
                    {screen.results?.map((screen) => (
                        <img src={smallImage(screen.image,1280)} key={screen.id} alt="screenshot" />
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
        )}
        </>
    );
};

export default GameDetail;