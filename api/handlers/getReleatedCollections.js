const { default: axios } = require('axios');

require('dotenv').config();

const URL = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getRelatedCollections = async (req, res) => {

    try{

        const {id} = req.params;

        const response = await axios.get(`${URL}/collections/${id}/related/?client_id=${apiKey}`);

        if(response.data){

            
            const dataCollection = response.data.map((element) => ({
                cover_photo: element.cover_photo,
                id: element.id,
                title: element.title,
                user: element.user,
            }));

            return res.status(200).json(dataCollection)
        } else {

            return res.status(400).send("Error to get Information")
        }
    }catch(error){
        return res.status(500).send("Internal Server Error")
    }
}

module.exports = getRelatedCollections;