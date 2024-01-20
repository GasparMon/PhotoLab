const { default: axios } = require("axios");

require("dotenv").config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getPhoto = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get(
      `${URL}/photos/${id}/?client_id=${apiKey}`
    );

    if (response.data) {
 
      const dataPhoto = {
        id: response.data.id,
        url: response.data.urls,
        user: response.data.user,
        alt: response.data.alt_description,
      };

      return res.status(200).json(dataPhoto);
    } else {
      return res.status(400).send("Error to get Information");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = getPhoto;
