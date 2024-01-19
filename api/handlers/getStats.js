const { default: axios } = require('axios');

require('dotenv').config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getStats = async (req, res) => {

    try{
        const {id} = req.params;

        const response = await axios.get(`${URL}/photos/${id}/statistics/?client_id=${apiKey}`);

        if(response.data){
            return res.status(200).json(response.data)
        }else{
            return res.status(400).send("Error to get Information")
        }
    }catch(error){
        return res.status(500).send("Internal Server Error")
    }
}

module.exports = getStats;