const express = require('express');
const { saveSentEmail , getEmails , moveEmailToBin , toggleStarredEmails , deletedEmail } = require('../controller/email.controller');

const routes =  express.Router();

routes.post('/save', saveSentEmail);
routes.get('/emails/:type' , getEmails);
routes.post('/save-draft', saveSentEmail);
routes.post('/bin', moveEmailToBin);
routes.post('/starred', toggleStarredEmails);
routes.post('/delete', deletedEmail);


module.exports = routes;
