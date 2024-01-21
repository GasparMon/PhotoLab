import { useEffect, useState } from "react";
import "../css/Photo.modules.css";
import { useNavigate, useParams } from "react-router-dom";
import AppGetPhoto from "../../controllers/AppGetPhoto";

export default function Photo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const data = await AppGetPhoto(id);

        if (data) {
          setPhoto(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPhoto();
  }, [id]);

  return (
    <div className="main_container_photo">
      <div className="photo_title">
        <h1>Portrait</h1>
      </div>

      {Object.keys(photo).length > 0 && (
        <>
          <div className="portrait_container">
            <div className="photo_frame">
              <img
                src={`${photo.url.regular}`}
                alt={`${photo.url.regular}`}
              ></img>
            </div>
            <div className="photo_info">
              <div className="creator_info">
                <div className="creator_img">
                  <img src={`${photo.user.profile_image.large}`}></img>
                </div>
                <div className="creator_quotes">
                  <h3>{`${photo.user.name}`}</h3>
                  <p>{`@${photo.user.instagram_username}`}</p>
                </div>
              </div>
              <div className="photo_alt">
                <p>{!photo.alt? "" : `"${photo.alt}"`}</p>
                </div>
                <div className="gallery_back">
                <img src="/img/GalleryModepng.png" alt="/img/GalleryModepng.png" onClick={goBack}></img>
                </div>
            </div>
           
          </div>
        </>
      )}
    </div>
  );
}
