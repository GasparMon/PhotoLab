import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetPhoto = async (id) => {
  try {

    const response = await axios.get(`${URL}/photo/${id}`);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetPhoto;
