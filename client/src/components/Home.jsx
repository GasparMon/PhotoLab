import { useEffect, useState } from "react";
import "../css/Home.modules.css";
import AppGetPhotos from "../../controllers/AppGetPhotos";

export default function Home() {
  const [gallery_one, setGalleryOne] = useState([]);
  const [gallery_two, setGalleryTwo] = useState([]);
  const [gallery_three, setGalleryThree] = useState([]);
  const [page_one, setPageOne] = useState(1);
  const [page_two, setPageTwo] = useState(2);
  const [page_three, setPagethree] = useState(3);

  useEffect(() => {
    const DataPhotosOne = async () => {
      try {
        const dataPhotos = await AppGetPhotos(page_one);

        if (dataPhotos) {
          setGalleryOne([...gallery_one, ...dataPhotos]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const DataPhotosTwo = async () => {
      try {
        const dataPhotos = await AppGetPhotos(page_two);

        if (dataPhotos) {
          setGalleryTwo([...gallery_two, ...dataPhotos]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const DataPhotosThree = async () => {
      try {
        const dataPhotos = await AppGetPhotos(page_three);

        if (dataPhotos) {
          setGalleryThree([...gallery_three, ...dataPhotos]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    DataPhotosOne();
    DataPhotosTwo();
    DataPhotosThree();
  }, [page_one, page_two, page_three]);

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setPageOne((prevPage) => prevPage + 3);
        setPageTwo((prevPage) => prevPage + 3);
        setPagethree((prevPage) => prevPage + 3);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="main_container_home">
      <div className="home_title">
        <h1>Most Popular</h1>
      </div>
      <div className="home_gallery">
        <div className="grid-item">
          {gallery_one.map((item) => (
            <div key={item.id} className="grid-img">
              <img src={`${item.url.small}`} />
            </div>
          ))}
        </div>
        <div className="grid-item">
          {gallery_two.map((item) => (
            <div key={item.id} className="grid-img">
              <img src={`${item.url.small}`} />
            </div>
          ))}
        </div>
        <div className="grid-item">
          {gallery_three.map((item) => (
            <div key={item.id} className="grid-img">
              <img src={`${item.url.small}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
