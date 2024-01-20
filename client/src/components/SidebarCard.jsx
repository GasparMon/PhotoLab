import { useEffect, useState } from "react";
import "../css/SidebarCard.modules.css";
import AppGetPhoto from "../../controllers/AppGetPhoto";

export default function SidebarCard({ cover, id, title, user }) {
  const [photocover, setCover] = useState({});

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const data = await AppGetPhoto(cover);

        if (data) {
          setCover(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPhoto();
  }, [cover]);

  return (
    <div className="main_sidecard">
      <div className="sidecard_img">
        {photocover && photocover.url ? (
          <img src={photocover.url.thumb} alt={photocover.id}></img>
        ) : (
          <div class="loader">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div class="bar4"></div>
            <div class="bar5"></div>
            <div class="bar6"></div>
            <div class="bar7"></div>
            <div class="bar8"></div>
            <div class="bar9"></div>
            <div class="bar10"></div>
            <div class="bar11"></div>
            <div class="bar12"></div>
          </div>
        )}
      </div>
      <div className="sidecard_title">
        <div>
          <h4>{title}</h4>
        </div>
        <div>{user && <p>@{user}</p>}</div>
      </div>
    </div>
  );
}
