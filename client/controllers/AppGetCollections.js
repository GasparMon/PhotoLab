import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetCollections = async () => {
  try {

   

    const response = await axios.get(`${URL}/collections/1`);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetCollections;
