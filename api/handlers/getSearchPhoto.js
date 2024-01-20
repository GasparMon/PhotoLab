const { default: axios } = require("axios");
require("dotenv").config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getSearchPhotos = async (req, res) => {
  
    const query = req.query.query || '';
    const page = req.params.page || 1;

  try {
    const response = await axios.get(`${URL}/search/photos`, {
        params: {
          query,
          page,
          order_by: 'relevant', 
        },
        headers: {
          Authorization: `Client-ID ${apiKey}`,
        },
      });

    if (response.data) {

      const photosData = response.data.map((element) => ({
        id: element.id,
        url: element.urls,
        user: element.user,
    }));

      return res.status(200).json(photosData);
    } else {
      return res.status(400).json("Error to get Information");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = getSearchPhotos;
