const { default: axios } = require("axios");
require("dotenv").config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getTopic = async (req, res) => {
  try {
    const { id_or_slug } = req.params;

    const response = await axios.get(
      `${URL}/topics/${id_or_slug}/?client_id=${apiKey}`
    );

    if (response.data) {
      return res.status(200).json(response.data);
    } else {
      return res.status(404).json({ error: "Topic not found" });
    }
  } catch (error) {
    console.error("Error fetching topic:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getTopic;
