import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {

  const appData = useSelector((state) => state.appData)
  const {query} = appData;


  const dispatch = useDispatch();

  const [galleries, setGalleries] = useState(
    {
      gallery_one: [],
      gallery_two: [],
      gallery_three:[],
    }
  );
  const [searchGallery, setsearchGallery] = useState(
    {
      gallery_one: [],
      gallery_two: [],
      gallery_three:[],
    }
  );
  const [page_one, setPageOne] = useState(1);
  const [page_two, setPageTwo] = useState(2);
  const [page_three, setPagethree] = useState(3);

  
  useEffect(() => {

if(query.length === 0){

  const fetchData = async (page, galleryKey) => {
    try {
      const dataPhotos = await AppGetPhotos(page);
      if (dataPhotos) {
        setGalleries((prevGalleries) => ({
          ...prevGalleries,
          [galleryKey]: [...prevGalleries[galleryKey], ...dataPhotos],
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
    fetchData(page_one, "gallery_one")
    // fetchData(page_two, "gallery_two"),
    // fetchData(page_three, "gallery_three")
}else{
console.log(query)
  const fetchData = async (page, galleryKey, query) => {
    try {
      const dataPhotos = await AppGetSearchPhoto(query, page);
      if (dataPhotos) {
        setsearchGallery((prevGalleries) => ({
          ...prevGalleries,
          [galleryKey]: [...prevGalleries[galleryKey], ...dataPhotos],
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
    fetchData(page_one, "gallery_one", query)
    // fetchData(page_two, "gallery_two"),
    // fetchData(page_three, "gallery_three")

}

  }, [page_one, page_two, page_three, query, dispatch]);

  useEffect(()=>{
    dispatch(getPhotos(galleries))
  },[galleries])

  useEffect(()=>{
    dispatch(getPhotos(searchGallery))
  },[searchGallery])

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight / 2) {
      if (page_one + 3 <= totalPages) {
        setPageOne((prevPage) => prevPage + 3);
      }

      //   if (page_two + 3 <= totalPages) {
      //     setPageTwo((prevPage) => prevPage + 3);
      //   }

      //   if (page_three + 3 <= totalPages) {
      //     setPagethree((prevPage) => prevPage + 3);
      //   }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        <div className="main_app_gallery">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photo/:id" element={<Photo/>}/>
          </Routes>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
