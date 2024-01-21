import { useState } from "react";
import "../css/Navbar.modules.css";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryName } from "../../redux/actions";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Navbar() {
  const appData = useSelector((state) => state.appData);
  const { query } = appData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setkeyword] = useState("");

  const handleChange = (event) => {
    setkeyword(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getGalleryName(keyword));
  };

  const handleHome = () => {
    setkeyword("");
    if (query !== "") {
      dispatch(getGalleryName(""));
    }
    navigate("/");
  };
  return (
    <div className="main_container_navbar">
      <div className="navbar_icon">
        <img
          src="/img/main_icon.png"
          alt="main_icon"
          onClick={handleHome}
        ></img>
      </div>
      <div className="navbar_title">
        <h1>PhotoLab</h1>
      </div>
      <div className="navbar_searchbar">
        <input
          placeholder="Search for photos"
          className="navbar_input"
          type="text"
          value={keyword}
          onChange={handleChange}
        />
        <img
          src="/img/most_popular.png"
          alt="search_icon"
          onClick={handleSearch}
        ></img>
      </div>
      <div className="navbar_theme">
        <label class="container"></label>
      </div>
      <div className="navbar_info"></div>
    </div>
  );
}
