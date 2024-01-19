import "../css/Sidebar.modules.css";
import SidebarCard from "./SidebarCard";

export default function Sidebar({ collections }) {
  
  return (
    <div className="main_container_sidebar">
      <div className="sidebar_title">
        <h1>Trends</h1>
      </div>
      <div className="sidebar_trends">
        <h1>Collections</h1>
        <div className="main_collections">
          {collections.map((element) => (
            <SidebarCard
              key={element.id}
              id={element.id}
              cover={element.cover_photo.id}
              title={element.title}
              user = {element.user.username}
            />
          ))}
        </div>
      </div>

      <div className="sidebar_trends">
        <h1>Photographers</h1>
        <div className="main_collections"></div>
      </div>
    </div>
  );
}
