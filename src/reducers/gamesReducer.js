

const initState = {
    popular:[],
    newGames:[],
    upcoming:[],
    searched:[],
}

const gamesReducer=(state=initState,action)=>{
    switch(action.type){
        case "FETCH_GAMES":
            return {...state,
                popular:action.payload.popular,
                newGames:action.payload.newGames,
                upcoming:action.payload.upcoming,
            }
        case "SEARCH_GAMES":
            return{
                ...state,
                searched:action.payload.searched,
            }  
        case "CLEAR_SEARCH":
            return{
                ...state,
                searched:[],
            }      
        default:
            return {...state}
    }
}

export default gamesReducer;