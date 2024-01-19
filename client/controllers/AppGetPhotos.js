import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetPhotos = async (page) => {
  try {

    const page = "1"
    const response = await axios.get(`${URL}/photos/${page}`);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetPhotos;
