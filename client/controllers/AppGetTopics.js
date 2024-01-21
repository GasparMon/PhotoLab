import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetTopics = async () => {
  try {

   

    const response = await axios.get(`${URL}/photolab/topics`);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetTopics;
