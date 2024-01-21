import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetTopicPhotos = async (id) => {
  try {

   const id_or_slug = id

    const response = await axios.get(`${URL}/photolab/topic/photos/${id_or_slug}`);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetTopicPhotos;
