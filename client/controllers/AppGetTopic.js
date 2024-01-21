import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetTopic = async (id) => {
  try {

   const id_or_slug = id

    const response = await axios.get(`${URL}/topic/${id_or_slug}`);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetTopic;
