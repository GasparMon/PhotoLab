
import "../css/Home.modules.css";
import PhotoCard from "./PhotoCard";
import { useSelector } from "react-redux";

export default function Home() {

  const appData = useSelector((state) => state.appData)
  const {landingGallery} = appData;

  const gallery_one = [];
  const gallery_two = [];
  const gallery_three = [];

  if(Object.keys(landingGallery).length){

    landingGallery.gallery.forEach((element, index) => {

      const columArray = index % 3;

      if (columArray === 0) {
        gallery_one.push(element);
      } else if (columArray=== 1) {
        gallery_two.push(element);
      } else {
        gallery_three.push(element);
      }
    })
  }


  
  return (
    <div className="main_container_home">
      {Object.keys(landingGallery).length > 0 && (

<>
<div className="home_title">
<h1>
{!appData.query
              ? "Most Popular"
              : appData.query}
</h1>
</div>
  <div className="home_gallery">
    <div className="grid-item">
      {gallery_one.map((item) => (
        <PhotoCard
          key={item.id}
          id={item.id}
          img={item.url.small}
        />
      ))}
    </div>
    <div className="grid-item">
      {gallery_two.map((item) => (
        <PhotoCard
          key={item.id}
          id={item.id}
          img={item.url.small}
        />
      ))}
    </div>
    <div className="grid-item">
      {gallery_three.map((item) => (
        <PhotoCard
          key={item.id}
          id={item.id}
          img={item.url.small}
        />
      ))}
    </div>
  </div>
  </>
)}

    </div>
  );
}
