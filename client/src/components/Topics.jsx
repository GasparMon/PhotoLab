import { useEffect, useState } from "react";
import "../css/Topics.modules.css"
import { useDispatch, useSelector } from "react-redux";
import AppGetTopics from "../../controllers/AppGetTopics";
import { gettopics } from "../../redux/actions";
import CollectionsCard from "./CollectionsCard";
import TopicCard from "./TopicCard";

export default function Topics(){

    const dispatch = useDispatch();
    const appData = useSelector((state) => state.appData);
    const { topics} = appData;
  
    const [fetch_topics, setTopics] = useState([]);
  
    useEffect(() => {
        if (Object.keys(topics).length) {
            setTopics(topics);
        } else {
          const DataTopics = async () => {
            try {
              const dataTopics = await AppGetTopics();
              if (dataTopics) {
                setTopics(dataTopics);
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
        <div className="main_container_collections">
          <div className="collections_title">
            <h1>Topics</h1>
          </div>
          <div className="collections_container">
          {fetch_topics.map((item) => (
          <TopicCard
            key={item.id}
            ids={item.id}
            cover={item.cover_photo}
            title={item.title}
          />
        ))}
          </div>
        </div>
      );
}