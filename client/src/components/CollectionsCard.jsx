import { useState } from "react";
import "../css/CollectionsCard.modules.css";
import { Link } from "react-router-dom";

export default function CollectionsCard({ key, id, cover, title, user }) {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="main_container_collectionsCard"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`${cover.urls.small}`}
        alt={`${cover.urls.small}`}
        className="grid_collection_img"
      ></img>
      {isHovered && (
        <div className="main_container_icons">
          <img src="/img/PhotoMode.png" className="photo_mode_icon" />
          </div>
      )}
    </div>
  );
}
