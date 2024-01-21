import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetCollection = async (id) => {
  try {
    const response = await axios.get(`${URL}/collection/${id}`);

    if (response.data) {
      
      return response.data
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetCollection;
