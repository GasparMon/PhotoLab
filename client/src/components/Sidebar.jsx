import { useEffect, useState } from "react";
import "../css/Sidebar.modules.css";
import SidebarCard from "./SidebarCard";
import AppGetCollections from "../../controllers/AppGetCollections";
import AppGetTopics from "../../controllers/AppGetTopics";

export default function Sidebar() {

  const [collections, setCollections] = useState([])
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const DataCollection = async () => {
        try {
            const dataCollections = await AppGetCollections();
            if (dataCollections) {
              const num = Math.floor(Math.random() * 8);
                setCollections(dataCollections.slice(num, num + 3));
            }
        } catch (error) {

            console.error('Error fetching data:', error);
        }
    };

    const DataTopics = async () => {
      try {
        const dataTopics = await AppGetTopics();
        if (dataTopics) {
          const num = Math.floor(Math.random() * 8);
            setTopics(dataTopics.slice(num, num + 3));
        }
    } catch (error) {

        console.error('Error fetching data:', error);
    }
    }
    DataCollection();
    DataTopics();
}, []);
  
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
        <h1>Topics</h1>
        <div className="main_collections">
          {topics.map((element) => (
            <SidebarCard
              key={element.id}
              id={element.id}
              cover={element.cover_photo.id}
              title={element.title}
            />
          ))}
    
        </div>
      </div>
    </div>
  );
}
