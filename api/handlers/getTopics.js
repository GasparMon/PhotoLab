const { default: axios } = require("axios");
require("dotenv").config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getTopics = async (req, res) => {
  
  const {page} = req.params;

  try {
    const response = await axios.get(`${URL}/topics/?client_id=${apiKey}&page=${page}`);

    if (response) {
      return res.status(200).json(response.data);
    } else {
      return res.status(400).json("Error to get Information");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = getTopics;
