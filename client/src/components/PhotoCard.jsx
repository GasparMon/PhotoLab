import { useState } from "react";

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
      {isHovered && (
        <img src="/img/PhotoMode.png" className="photo_mode_icon" />
      )}
    </div>
  );
}
