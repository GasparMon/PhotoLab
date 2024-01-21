import { GALLERYNAME, GETCOLLECTIONS, GETPHOTOS, GETTOPICS } from "./types";

const initialState = {

    appData: {

        landingGallery: {},
        collections: {},
        topics:{},
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

        case GETCOLLECTIONS:

        return {
            ...state,
            appData:{
                ...state.appData,
                collections: action.payload
            }
        }

        case GETTOPICS:

        return{
            ...state,
            appData:{
                ...state.appData,
                topics: action.payload
            }
        }

        default:
            
        return state;
    }
}
