import "../css/Navbar.modules.css";

export default function Navbar() {
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
        />
        <img src="/img/search_photo.png" alt="search_icon"></img>
      </div>
      <div className="navbar_theme">
        <label class="container">
          <input id="check" type="checkbox" />
          <span></span>
          <label for="check" class="shadow"></label>
        </label>
      </div>
      <div className="navbar_info">
        <img src="/img/about_me2.png"></img>
      </div>
    </div>
  );
}
