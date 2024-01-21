import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppGetPhotos from "../controllers/AppGetPhotos";
import AppGetCollections from "../controllers/AppGetCollections";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../redux/actions";
import AppGetSearchPhoto from "../controllers/AppGetSearchPhoto";
import Photo from "./components/Photo";
import Loading from "./components/Loading";
import Collections from "./components/Collections";
import CollectionGallery from "./components/CollectionGallery";
import Topics from "./components/Topics";
import TopicGallery from "./components/TopicGallery";

function App() {
  const totalPages = 9;
  const appData = useSelector((state) => state.appData);
  const { query } = appData;
  const location = useLocation();

  const dispatch = useDispatch();

  const [connection, setConnection] = useState(false);
  const [galleries, setGalleries] = useState({
    gallery: [],
  });

  const [page_one, setPageOne] = useState(1);
  const [page_two, setPageTwo] = useState(2);
  const [page_three, setPagethree] = useState(3);

  useEffect(() => {
    setGalleries(() => ({
      gallery: [],
    }));

    setPageOne(1);
    setPageTwo(2);
    setPagethree(3);
  }, [query, dispatch]);

  useEffect(() => {

    if(location.pathname == "/"){
      if (query === "") {
        const fetchData = async (page) => {
          try {
            const dataPhotos = await AppGetPhotos(page);
            if (dataPhotos) {
              setGalleries((prevGalleries) => ({
                ...prevGalleries,
                gallery: [...prevGalleries.gallery, ...dataPhotos],
              }));
              setConnection(true);
            }
          } catch (error) {
            setConnection(false);
            console.error("Error fetching data:", error);
          }
        };
  
        fetchData(page_one);
        fetchData(page_two);
        fetchData(page_three);
      } else {
    
        const fetchData = async (page, query) => {
          try {
            const dataPhotos = await AppGetSearchPhoto(query, page);
            if (dataPhotos) {
              setGalleries((prevGalleries) => ({
                ...prevGalleries,
                gallery: [...prevGalleries.gallery, ...dataPhotos],
              }));
              setConnection(true);
            }
          } catch (error) {
            setConnection(false);
            console.error("Error fetching data:", error);
          }
        };
  
        fetchData(page_one, query);
        fetchData(page_two, query);
        fetchData(page_three, query);
      }
    }
  }, [page_one, page_two, page_three, query, dispatch]);

  useEffect(() => {
    dispatch(getPhotos(galleries));
  }, [galleries]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 500) {
      setPageOne((prevPage) => {
        const nextPage = prevPage + 3;
        return nextPage <= totalPages ? nextPage : prevPage;
      });

      setPageTwo((prevPage) => {
        const nextPage = prevPage + 3;
        return nextPage <= totalPages ? nextPage : prevPage;
      });

      setPagethree((prevPage) => {
        const nextPage = prevPage + 3;
        return nextPage <= totalPages ? nextPage : prevPage;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const optionalRender = () => {
    if (!connection) {
      return (
        <div className="main_app_gallery">
          <Loading />
        </div>
      );
    }
  
    return (
      <div className="main_app_gallery">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo/:id" element={<Photo />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:id" element={<CollectionGallery />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topic/:id" element={<TopicGallery />} />
        </Routes>
      </div>
    );
  };

  return (
    <div className="main_app_div">
      <div className="main_app_navbar">
        <Navbar></Navbar>
      </div>

      <div className="main_app_container">
        <div className="main_over"></div>
        <div className="main_home">
          <div className="main_app_sidebar">
            <Sidebar></Sidebar>
          </div>
          {optionalRender()}
        </div>
      </div>
    </div>
  );
}

export default App;
