import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetSearchPhoto = async (query, page) => {
  try {
    const response = await axios.get(`${URL}/search/photo/${page}?query=${query}`);

    if (response.data) {
        console.log(response.data)
      
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetSearchPhoto;
