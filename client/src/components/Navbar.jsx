import { useState } from "react";
import "../css/Navbar.modules.css";
import { useDispatch } from "react-redux";
import { getGalleryName } from "../../redux/actions";

export default function Navbar() {
  const dispatch = useDispatch();
  const [query, setquery] = useState("");

  const handleChange = (event) => {
    setquery(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getGalleryName(query))

  }
  return (
    <div className="main_container_navbar">
      <div className="navbar_icon">
        <img src="/img/main_icon.png" alt="main_icon"></img>
      </div>
      <div className="navbar_title">
        <h1>PhotoLab</h1>
      </div>
      <div className="navbar_searchbar">
        <input
          placeholder="Search for photos"
          className="navbar_input"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <img 
        src="/img/search_photo.png"
         alt="search_icon"
         onClick={handleSearch}
         ></img>
      </div>
      <div className="navbar_theme">
        <label class="container"></label>
      </div>
      <div className="navbar_info">
        <h2>About Me</h2>
      </div>
    </div>
  );
}
