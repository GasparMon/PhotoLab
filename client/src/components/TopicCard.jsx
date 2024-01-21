import { useState } from "react";
import "../css/CollectionsCard.modules.css";
import { Link} from "react-router-dom";

export default function TopicCard({ key, ids, cover, title, user }) {
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
        <div className="container_icons">
      {isHovered && (
        <>
        <Link to={`/topic/${ids}`} className="Link">
        <img src="/img/PhotoMode.png" className="collection_icon" />
        
        </Link>
        <h2>{`${title}`}</h2>
        </>
    )}
    
        </div>
    </div>
  );
}