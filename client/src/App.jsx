import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppGetPhotos from '../controllers/AppGetPhotos'
import AppGetCollections from '../controllers/AppGetCollections'

function App() {

  const [collections, setCollections] = useState([])

  useEffect(() => {

    const DataPhotos = async () => {
      
      try{
        const dataPhotos = await AppGetPhotos();

        if(dataPhotos){
          console.log(dataPhotos);
        }
      }catch(error){
        console.error('Error fetching data:', error);
      }
    }

    DataPhotos();
  },[])

  useEffect(() => {
    const DataCollection = async () => {
        try {
            const dataCollections = await AppGetCollections();
            if (dataCollections) {
          
                setCollections(dataCollections.slice(4, 7));
            }
        } catch (error) {

            console.error('Error fetching data:', error);
        }
    };
    DataCollection();
}, []);


  return (
    <div className='main_app_div'>
    <Navbar></Navbar>
    <Sidebar collections = {collections} ></Sidebar>
    </div>
  )
}

export default App
