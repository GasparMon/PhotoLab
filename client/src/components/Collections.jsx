import { useEffect, useState } from "react";
import "../css/Collections.modules.css";
import AppGetCollections from "../../controllers/AppGetCollections";
import CollectionsCard from "./CollectionsCard";
import { useSelector } from "react-redux";

export default function Collections() {
  const appData = useSelector((state) => state.appData);
  const { collections } = appData;

  const [fetch_collections, setCollections] = useState([]);

  useEffect(() => {
    if (Object.keys(collections).length) {
      setCollections(collections);
    } else {
      const fetchData = async () => {
        try {
          const dataCollections = await AppGetCollections();
          if (dataCollections) {
            setCollections(dataCollections);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, []);

  return (
    <div className="main_container_collections">
      <div className="collections_title">
        <h1>Collections</h1>
      </div>
      <div className="collections_container">
        {fetch_collections.map((item) => (
          <CollectionsCard
            key={item.id}
            ids={item.id}
            cover={item.cover_photo}
            title={item.title}
            user={item.user}
          />
        ))}
      </div>
    </div>
  );
}
