const { default: axios } = require('axios');

require('dotenv').config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getCollections = async (req, res) => {

    try{

        const {page} = req.params;

        const response = await axios.get(`${URL}/collections/?client_id=${apiKey}&page=${page}`);

        if(response.data){

            return res.status(200).json(response.data)
        } else {

            return res.status(400).send("Error to get Information")
        }
    }catch(error){
        return res.status(500).send("Internal Server Error")
    }
}

module.exports = getCollections;