 let async = require('async'),
parseString = require('xml2js').parseString;
 
let util = require('../Utilities/util'),
 formDAO = require('../DAO/ formDAO');
//config = require("../Utilities/config").config;
 
 
/**API to create the atricle */
let createForm = (data, callback) => {
async.auto({
form: (cb) => {
var dataToSet = {
"category":data.category?data.category:'',
"title":data.title,
}
console.log(dataToSet);
formDAO.createForm(dataToSet, (err, dbData) => {
if (err) {
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage":util.statusMessage.SERVER_BUSY });
return;
}
 
cb(null, { "statusCode": util.statusCode.OK, "statusMessage":util.statusMessage.DATA_UPDATED,"result":dataToSet });
});
}
//]
}, (err, response) => {
callback(response.form);
});
}
 
/**API to update the form */
let updateForm = (data,callback) => {
async.auto({
formUpdate :(cb) =>{
if (!data.id) {
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage":util.statusMessage.PARAMS_MISSING })
return;
}
console.log('phase 1');
var criteria = {
id : data.id,
}
var dataToSet={
"category": data.category,
"title":data.title,
}
console.log(criteria,'test',dataToSet);
                    formDAO.updateForm(criteria, dataToSet, (err, dbData)=>{
                        if(err){
cb(null,{"statusCode":util.statusCode.FOUR_ZERO_ONE,"statusMessage":util.statusMessage.SERVER_BUSY});
                        return; 
                        }
                        else{
cb(null, { "statusCode": util.statusCode.OK, "statusMessage":util.statusMessage.DATA_UPDATED,"result":dataToSet });                        
                        }
                    });
}
}, (err,response) => {
callback(response.formUpdate);
});
}
 
/**API to delete the subject */
let deleteForm = (data,callback) => {
console.log(data,'data to set')
async.auto({
removeForm :(cb) =>{
if (!data.id) {
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage":util.statusMessage.PARAMS_MISSING })
return;
}
var criteria = {
id : data.id,
}
formDAO.deleteForm(criteria,(err,dbData) => {
if (err) {
console.log(err);
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage":util.statusMessage.SERVER_BUSY });
return;
}
cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
});
}
}, (err,response) => {
callback(response.removeForm);
});
}
 
/***API to get the form list */
let getForm = (data, callback) => {
async.auto({
form: (cb) => {
formDAO.getForm({},(err, data) => {
if (err) {
cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage":util.statusMessage.SERVER_BUSY});
return;
}
cb(null, data);
return;
});
}
}, (err, response) => {
callback(response.form);
})
}
 
/***API to get the form detail by id */
let getFormById = (data, callback) => {
async.auto({
form: (cb) => {
let criteria = {
"id":data.id
}
formDAO.getFormDetail(criteria,(err, data) => {
if (err) {
console.log(err,'error----');
cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage":util.statusMessage.SERVER_BUSY});
return;
}
cb(null, data[0]);
return;
});
}
}, (err, response) => {
callback(response.form);
})
}
 
module.exports = {
createForm : createForm,
updateForm : updateForm,
deleteForm : deleteForm,
getForm : getForm,
getFormById : getformById
};
