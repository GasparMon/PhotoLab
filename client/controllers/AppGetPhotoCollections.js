import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetPhotoCollections = async (id) => {
  try {
    const response = await axios.get(`${URL}/collection/photos/${id}`);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetPhotoCollections;
