import axios from "axios";
import  {gameDetailsURL,screenShotURL}  from "../api";



export const loadDetail=(id)=>async(dispatch)=>{
    dispatch({
        type: "LOADING_DETAIL",
    });
    try {
        
        const detailData = await axios.get(gameDetailsURL(id));
        const screenShotData = await axios.get(screenShotURL(id));
        
       

        dispatch({
            type: "GET_DETAIL",
            payload: {
                game: detailData.data,
                screen:screenShotData.data,
            },
        });
    } catch (error) {
        console.error("Error fetching game details:", error);
    }
}