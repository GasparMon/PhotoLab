const getCollection = require('../handlers/getCollection');
const getCollections = require('../handlers/getCollections');
const getPhoto = require('../handlers/getPhoto');
const getPhotoCollections = require('../handlers/getPhotoCollections');
const getPhotos = require('../handlers/getPhotos');
const getRelatedCollections = require('../handlers/getReleatedCollections');
const getSearchCollections = require('../handlers/getSearchCollections');
const getSearchPhotos = require('../handlers/getSearchPhoto');
const getStats = require('../handlers/getStats');
const getTopic = require('../handlers/getTopic');
const getTopicPhotos = require('../handlers/getTopicPhotos');
const getTopics = require('../handlers/getTopics');

const routes = require('express').Router();

routes.get("/photos/:page", getPhotos);
routes.get("/photo/:id", getPhoto);
routes.get("/photo/stats/:id", getStats);
routes.get("/collections", getCollections);
routes.get("/collection/:id", getCollection);
routes.get("/collection/photos/:id", getPhotoCollections);
routes.get("/topics", getTopics);
routes.get("/search/photos/:page", getSearchPhotos);
routes.get("/search/collections", getSearchCollections);
routes.get("/collection/related/:id", getRelatedCollections);
routes.get("/topic/:id_or_slug", getTopic);
routes.get("/topic/photos/:id_or_slug", getTopicPhotos)

module.exports = routes