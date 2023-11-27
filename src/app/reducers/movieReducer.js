import { ActionTypes } from "./actionTypes";



const initialState={popularFilms:[],
isLoading:false,
categories:[],
images:[]

}
export const movieReducer=(state=initialState,action)=>{

switch (action.type) {
    case ActionTypes.GET_MOVIES :
        return{...state,
            popularFilms: action.payload

        }
        case ActionTypes.GET_GENRES :
            return {...state,
                categories:action.payload


            }
            case ActionTypes.GET_IMAGES :
                return {...state,
                    images:action.payload
                }
      

    default :
       return state;
}

}