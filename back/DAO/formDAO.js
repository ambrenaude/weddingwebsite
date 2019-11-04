let dbConfig = require("../Utilities/mysqlConfig");


 
let getForm = (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
dbConfig.getDB().query(`select * from form where 1`,criteria, callback);
}
 
let getFormDetail = (criteria, callback) => {
    let conditions = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
dbConfig.getDB().query(`select * from form where 1 ${conditions}`, callback);
}
 
let createForm = (dataToSet, callback) => {
console.log("insert into form set ? ", dataToSet,'pankaj')
dbConfig.getDB().query("insert into form set ? ", dataToSet, callback);
}
 
let deleteForm = (criteria, callback) => {
let conditions = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
console.log(`delete from form where 1 ${conditions}`);
dbConfig.getDB().query(`delete from form where 1 ${conditions}`, callback);
 
}
 
let updateForm = (criteria,dataToSet,callback) => {
    let conditions = "";
let setData = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
dataToSet.category ? setData += `category = '${dataToSet.category}'` : true;
dataToSet.title ? setData += `, title = '${dataToSet.title}'` : true;
console.log(`UPDATE form SET ${setData} where 1 ${conditions}`);
dbConfig.getDB().query(`UPDATE form SET ${setData} where 1 ${conditions}`, callback);
}
module.exports = {
getForm : getForm,
createForm : createForm,
deleteForm : deleteForm,
updateForm : updateForm,
getFormDetail : getFormDetail
}
