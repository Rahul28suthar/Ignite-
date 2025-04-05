import axios from "axios";
import {popularGamesURL,upcomingGamesURL,newGamesURL,searchGameURL} from "../api";


export const loadGames =()=>async(dispatch)=>{
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(upcomingGamesURL());
    const upcomingData = await axios.get(newGamesURL());
    dispatch({
        type : "FETCH_GAMES",
        payload:{
            popular:popularData.data.results,
            newGames:newGamesData.data.results,
            upcoming:upcomingData.data.results,
        }
    })
}

export const searchGame = (game_name)=>async(dispatch)=>{
    const search = await axios.get(searchGameURL(game_name));
    dispatch({
        type: "SEARCH_GAMES",
        payload:{
            searched: search.data.results,
        }
    })
}