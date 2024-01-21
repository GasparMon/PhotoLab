import { useState } from "react";
import "../css/PhotoCard.modules.css";
import { Link } from "react-router-dom";

export default function PhotoCard({ id, img }) {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="grid-img"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={`${img}`} alt={`${id}`} className="grid_gallery_img" />
      <div className="container_icons_photo">
        {isHovered && (
          <Link to={`/photo/${id}`} className="Link">
          <img src="/img/PhotoMode.png" className="photo_mode_icon" />
          </Link>
        )}
      </div>
    </div>
  );

}
