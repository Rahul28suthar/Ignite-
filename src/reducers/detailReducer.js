const initialState = {
    game:{},
    screen:{},
    isLoading:true,
};

const detailReducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET_DETAIL":
            return {
                ...state,
                game:action.payload.game,
                isLoading:false,
                screen:action.payload.screen,
            }
            case "LOADING_DETAIL":
                return{
                    ...state,
                    isLoading:true
                }
            default:{
                return {...state,}
             }    
    }
}

export default detailReducer;