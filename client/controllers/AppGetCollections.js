import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetCollections = async () => {
  try {
    const response = await axios.get(`${URL}/collections`);

    if (response.data) {
      if (response.data.length >= 20) {
        const num = Math.floor(Math.random() * 11);

        return response.data.slice(num, num + 9);
      } else {
        return response.data.slice(0, 9);
      }
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetCollections;
