import { useEffect, useState } from "react";
import "../css/Home.modules.css";
import AppGetPhotos from "../../controllers/AppGetPhotos";
import PhotoCard from "./PhotoCard";
import { useSelector } from "react-redux";

export default function Home() {

  const appData = useSelector((state) => state.appData)
  const {landingGallery} = appData;

  console.log(landingGallery);
  
  return (
    <div className="main_container_home">
      <div className="home_title">
        <h1>
        {!appData.name
                      ? "Most Popular"
                      : appData.name}
        </h1>
      </div>
      <div className="home_gallery">
        <div className="grid-item">
          {landingGallery.gallery_one.map((item) => (
            <PhotoCard
            id = {item.id}
            img = {item.url.small}
            />
          ))}

        </div>
        <div className="grid-item">
          {landingGallery.gallery_two.map((item) => (
            <PhotoCard
            id = {item.id}
            img = {item.url.small}
            />
          ))}

        </div>
        <div className="grid-item">
          {landingGallery.gallery_three.map((item) => (
            <PhotoCard
            id = {item.id}
            img = {item.url.small}
            />
          ))}

        </div>
      </div>
    </div>
  );
}
