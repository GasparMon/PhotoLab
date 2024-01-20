import { GALLERYNAME, GETPHOTOS } from "./types";

const initialState = {

    appData: {

        landingGallery: {},
        searchGalleryOne: [],
        searchGalleryTwo: [],
        searchGalleryThree: [],
        name:""

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
                name: action.payload.name
            }

        default:
            
        return state;
    }
}
