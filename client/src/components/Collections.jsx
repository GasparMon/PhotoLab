
import { useEffect, useState } from "react";
import "../css/Collections.modules.css";
import AppGetCollections from "../../controllers/AppGetCollections";
import CollectionsCard from "./CollectionsCard";


export default function Collections() {

    const [collections, setCollections] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
              const dataCollections = await AppGetCollections();
              if (dataCollections) {
                console.log(dataCollections)
              setCollections(dataCollections)
              }
            } catch (error) {
              
              console.error("Error fetching data:", error);
            }
          };
    
          fetchData();

    }, [])

  
  return (
    <div className="main_container_collections">
     <div className="collections_title">
        <h1>
        Collections
        </h1>
     </div>
     <div className="collections_container">
     {collections.map((item) => (
        <CollectionsCard
          key={item.id}
          id={item.id}
          cover={item.cover_photo}
          title = {item.title}
          user = {item.user}
        />
      ))}
     </div>
    </div>
  );
}
