import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
import { Form } from '@angular/forms';
 
@Injectable()
export class FormService {
//URL for CRUD operations
    formUrl = "http://localhost:3000/form";
    //Create constructor to get Http instance
    constructor(private http:HttpClient) {
    }
    
    //Fetch all forms
getAllForms(): Observable<Form[]> {
return this.http.get(this.formUrl+"/get-form")
              .map(this.extractData)
         .catch(this.handleError);
 
}
    //Create form
createForm(form: Form):Observable<number> {
     let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: cpHeaders });
return this.http.post(this.formUrl+"/create-form", form, options)
.map(success => success.status)
.catch(this.handleError);
}
    //Fetch form by id
getFormById(formId: string): Observable<Form> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.formUrl +"/get-form-by-id?id="+ formId);
        return this.http.get(this.formUrl +"/get-form-by-id?id="+ formId)
             .map(this.extractData)
             .catch(this.handleError);
}   
    //Update form
updateForm(form: Form):Observable<number> {
     let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
return this.http.put(this.formUrl +"/update-form", form, options)
.map(success => success.status)
.catch(this.handleError);
}
//Delete form    
deleteFormById(formId: string): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.formUrl +"/delete-form?id="+ formId)
             .map(success => success.status)
             .catch(this.handleError);
}   
    private extractData(res: Response) {
        let body = res.json();
return body;
}
private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
}
}
