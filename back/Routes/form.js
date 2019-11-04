let express = require('express'),
router = express.Router(),
util = require('../Utilities/util'),
formService = require('../Services/form');
 
/**Api to create form */
router.post('/create-form', (req, res) => {
formService.createForm(req.body, (data) => {
res.send(data);
});
});
 
// /**Api to update form */
router.put('/update-form', (req, res) => {
    formService.updateForm(req.body, (data) => {
res.send(data);
});
});
 
// /**Api to delete the form */
router.delete('/delete-form', (req, res) => {
    formService.deleteForm(req.query, (data) => {
res.send(data);
});
});
 
/**Api to get the list of form */
router.get('/get-form', (req, res) => {
documentService.getForm(req.query, (data) => {
res.send(data);
});
});
 
// /**API to get the form by id... */
router.get('/get-form-by-id', (req, res) => {
    formService.getFormById(req.query, (data) => {
res.send(data);
});
});
 
module.exports = router;
