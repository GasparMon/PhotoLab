const { default: axios } = require("axios");
require("dotenv").config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getTopics = async (req, res) => {
  try {
    const response = await axios.get(`${URL}/topics/`, {
      params: {
        order_by: "latest",
      },
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });

    if (response) {
   
      const dataTopic = response.data.map((element) => ({
        id: element.id,
        title: element.title,
        cover_photo: element.cover_photo,
    }));

      return res.status(200).json(dataTopic);
    } else {
      return res.status(400).json("Error to get Information");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = getTopics;
