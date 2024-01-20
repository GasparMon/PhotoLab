import { GALLERYNAME, GETCOLLECTIONS, GETPHOTOS } from "./types";

export function getPhotos(galleryData){

    return{
        type:GETPHOTOS,
        payload:galleryData,
    }
}

export function getCollections(collectionsData){

    return{
        type:GETCOLLECTIONS,
        payload:collectionsData,
    }
}

export function getGalleryName(query){

    return{
        type: GALLERYNAME,
        payload: query,
    }
}