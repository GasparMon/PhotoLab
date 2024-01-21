const { default: axios } = require("axios");

require("dotenv").config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getCollections = async (req, res) => {
  try {
    const perPage = 50;

    const response = await axios.get(
      `${URL}/collections/?client_id=${apiKey}`,
      {
        params: {
          per_page: perPage,
        },
      }
    );

    if (response.data) {
      const dataCollection = response.data
        .map((element) => {
          if (element.user.first_name !== "Unsplash+") {
            return {
              id: element.id,
              title: element.title,
              cover_photo: element.cover_photo,
              user: element.user,
            };
          }
          return undefined; 
        })
        .filter(Boolean);

      return res.status(200).json(dataCollection);
    } else {
      return res.status(400).send("Error to get Information");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = getCollections;
