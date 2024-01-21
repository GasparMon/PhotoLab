import axios from "axios";

const URL = import.meta.env.VITE_URL_HOST;

const AppGetSearchPhoto = async (query, page) => {
  try {
    const response = await axios.get(`${URL}/photolab/search/photos/${page}?query=${query}`);

    if (response.data) {

      return(response.data)
      
    }
  } catch (error) {
    return alert(error);
  }
};

export default AppGetSearchPhoto;
