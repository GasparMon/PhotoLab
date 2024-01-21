const { default: axios } = require('axios');

require('dotenv').config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getTopicPhotos = async (req, res) => {
  
    try {
        const { id_or_slug } = req.params;
    
   
        const perPage = 80;

        const response = await axios.get(`${URL}/topics/${id_or_slug}/photos/?client_id=${apiKey}`, {
            params: {
                per_page: perPage,
            },
        });


        if (response.data) {
         
            return res.status(200).json(response.data);
        } else {
            return res.status(400).send("Error to get Information");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = getTopicPhotos;
