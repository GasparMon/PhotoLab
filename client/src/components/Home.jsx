
import "../css/Home.modules.css";
import PhotoCard from "./PhotoCard";
import { useSelector } from "react-redux";

export default function Home() {

  const appData = useSelector((state) => state.appData)
  const {landingGallery} = appData;


  
  return (
    <div className="main_container_home">
      {Object.keys(landingGallery).length > 0 && (

<>
<div className="home_title">
<h1>
{!appData.query
              ? "Most Popular"
              : appData.name}
</h1>
</div>
  <div className="home_gallery">
    <div className="grid-item">
      {landingGallery.gallery_one.map((item) => (
        <PhotoCard
          key={item.id}
          id={item.id}
          img={item.url.small}
        />
      ))}
    </div>
    {/* <div className="grid-item">
      {landingGallery.gallery_two.map((item) => (
        <PhotoCard
          key={item.id}
          id={item.id}
          img={item.url.small}
        />
      ))}
    </div>
    <div className="grid-item">
      {landingGallery.gallery_three.map((item) => (
        <PhotoCard
          key={item.id}
          id={item.id}
          img={item.url.small}
        />
      ))}
    </div> */}
  </div>
  </>
)}

    </div>
  );
}
