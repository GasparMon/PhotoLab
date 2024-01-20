const getCollection = require('../handlers/getCollection');
const getCollections = require('../handlers/getCollections');
const getPhoto = require('../handlers/getPhoto');
const getPhotoCollections = require('../handlers/getPhotoCollections');
const getPhotos = require('../handlers/getPhotos');
const getRelatedCollections = require('../handlers/getReleatedCollections');
const getSearchCollections = require('../handlers/getSearchCollections');
const getSearchPhotos = require('../handlers/getSearchPhoto');
const getStats = require('../handlers/getStats');
const getTopics = require('../handlers/getTopics');

const routes = require('express').Router();

routes.get("/photos/:page", getPhotos);
routes.get("/photo/:id", getPhoto);
routes.get("/photo/stats/:id", getStats);
routes.get("/collections/:page", getCollections);
routes.get("/collection/:id", getCollection);
routes.get("/collection/photos/:id", getPhotoCollections);
routes.get("/topics", getTopics);
routes.get("/search/photo", getSearchPhotos);
routes.get("/search/collections", getSearchCollections);
routes.get("/collection/related/:id", getRelatedCollections);

module.exports = routes