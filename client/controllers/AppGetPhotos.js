import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetPhotos = async (page) => {
  try {

    const response = await axios.get(`${URL}/photolab/photos/${page}`);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetPhotos;
