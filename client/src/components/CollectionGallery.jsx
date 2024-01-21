import "../css/CollectionGallery.modules.css";
import { useSelector } from "react-redux";
import PhotoCard from "./PhotoCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppGetPhotoCollections from "../../controllers/AppGetPhotoCollections";
import AppGetCollection from "../../controllers/AppGetCollection";

export default function CollectionGallery() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [collection, setCollection] = useState({});
  const [gallery, setGallery] = useState([]);
  const [galleryOne, setGalleryOne] = useState([]);
  const [galleryTwo, setGalleryTwo] = useState([]);
  const [galleryThree, setGalleryThree] = useState([]);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const data = await AppGetCollection(id);

        if (data) {
          setCollection(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCollectionPhoto = async () => {
      try {
        const data = await AppGetPhotoCollections(id);

        if (data) {
          setGallery(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCollection();

    fetchCollectionPhoto();
  }, [id]);

  useEffect(() => {
    if (gallery.length) {
      const newGalleryOne = [];
      const newGalleryTwo = [];
      const newGalleryThree = [];

      gallery.forEach((element, index) => {
        const columArray = index % 3;

        if (columArray === 0) {
          newGalleryOne.push(element);
        } else if (columArray === 1) {
          newGalleryTwo.push(element);
        } else {
          newGalleryThree.push(element);
        }
      });

      setGalleryOne(newGalleryOne);
      setGalleryTwo(newGalleryTwo);
      setGalleryThree(newGalleryThree);
    }
  }, [gallery]);

  return (
    <div className="main_container_collection">
      {Object.keys(collection).length > 0 && (
        <>
          <div className="colection_title">
            <p>Collection</p>
            <h1>{`${collection.title}`}</h1>
          </div>
          <div className="collection_container">
            <div className="collection_gallery">
              <div className="grid-item">
                {galleryOne.map((item) => (
                  <PhotoCard key={item.id} id={item.id} img={item.urls.small} />
                ))}
              </div>
              <div className="grid-item">
                {galleryTwo.map((item) => (
                  <PhotoCard key={item.id} id={item.id} img={item.urls.small} />
                ))}
              </div>
              <div className="grid-item">
                {galleryThree.map((item) => (
                  <PhotoCard key={item.id} id={item.id} img={item.urls.small} />
                ))}
              </div>
            </div>
            <div className="collection_info">
              <div className="creator_info">
                <div className="creator_img">
                  <img src={`${collection.user.profile_image.large}`}></img>
                </div>
                <div className="creator_quotes">
                  <h3>{`${collection.user.name}`}</h3>
                  <p>{`@${collection.user.instagram_username}`}</p>
                </div>
              </div>
              <div className="creator_bio">
                <p>{!collection.user.bio ? "" : collection.user.bio}</p>

                <p>{`${gallery.length} Photos`}</p>
              </div>
              <div className="gallery_back">
                <img
                  src="/img/GalleryModepng.png"
                  alt="/img/GalleryModepng.png"
                  onClick={goBack}
                ></img>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
