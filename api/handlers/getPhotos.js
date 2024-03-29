const { default: axios } = require("axios");
require("dotenv").config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getPhotos = async (req, res) => {
  const { page } = req.params;

  try {
    const response = await axios.get(`${URL}/photos/`, {
      params: {
        page,
        order_by: "popular",
      },
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });

    if (response) {

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

module.exports = getPhotos;
