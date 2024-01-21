import { useEffect, useState } from "react";
import "../css/Sidebar.modules.css";
import SidebarCard from "./SidebarCard";
import AppGetCollections from "../../controllers/AppGetCollections";
import AppGetTopics from "../../controllers/AppGetTopics";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCollections, gettopics } from "../../redux/actions";

export default function Sidebar() {
  const [fetch_collections, setCollections] = useState([]);
  const [fetch_topics, setTopics] = useState([]);
  const appData = useSelector((state) => state.appData);
  const { collections, topics } = appData;
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(collections).length) {
      const num = Math.floor(Math.random() * 8);
      setCollections(collections.slice(num, num + 3));
    } else {
      const DataCollection = async () => {
        try {
          const dataCollections = await AppGetCollections();
          if (dataCollections) {
            const num = Math.floor(Math.random() * 8);
            setCollections(dataCollections.slice(num, num + 3));
            dispatch(getCollections(dataCollections));
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      DataCollection();
    }

    if (Object.keys(topics).length) {
      const num = Math.floor(Math.random() * 6);
      setTopics(topics.slice(num, num + 3));
    } else {
      const DataTopics = async () => {
        try {
          const dataTopics = await AppGetTopics();
          if (dataTopics) {
            const num = Math.floor(Math.random() * 6);
            setTopics(dataTopics.slice(num, num + 3));
            dispatch(gettopics(dataTopics))
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      DataTopics();
    }
  }, []);

  return (
    <div className="main_container_sidebar">
      <div className="sidebar_title">
        <h1>Trends</h1>
      </div>
      <div className="sidebar_trends">
        <Link to={`/collections`} className="Link">
          <h1 className="text_link">Collections</h1>
        </Link>
        <div className="main_collections">
          {fetch_collections.map((element) => (
            <SidebarCard
              key={element.id}
              id={element.id}
              cover={element.cover_photo.id}
              title={element.title}
              user={element.user.username}
              location = "/collections"
            />
          ))}
        </div>
      </div>

      <div className="sidebar_trends">
      <Link to={`/topics`} className="Link">
        <h1 className="text_link">Topics</h1>
        </Link>
        <div className="main_collections">
          {fetch_topics.map((element) => (
            <SidebarCard
              key={element.id}
              id={element.id}
              cover={element.cover_photo.id}
              title={element.title}
              location = "/topic"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
