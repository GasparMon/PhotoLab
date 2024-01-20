import { GALLERYNAME, GETPHOTOS } from "./types";

const initialState = {

    appData: {

        landingGallery: {},
        query:""

    }
}

export default function reducer(state = initialState, action){

    switch(action.type){

        case GETPHOTOS:
         
            return{
                ...state,
                appData:{
                    ...state.appData,
                    landingGallery: action.payload
                }
            }

        case GALLERYNAME:
          
            return{
                ...state,
                appData:{
                    ...state.appData,
                    landingGallery:[],
                    query: action.payload
                }
            }

        default:
            
        return state;
    }
}
