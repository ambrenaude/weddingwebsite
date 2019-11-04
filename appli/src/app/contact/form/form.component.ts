import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
import { FormService } from './service/contact.service';
import { Form } from '@angular/forms';
 
@Component({
selector: 'app-form',
templateUrl: './form.component.html',
styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
//Component properties
allForms: Form[];
statusCode: number;
requestProcessing = false;
formIdToUpdate = null;
processValidation = false;
//Create form
formForm = new FormGroup({
title: new FormControl('', Validators.required),
category: new FormControl('', Validators.required)   
});
//Create constructor to get service instance
constructor(private formService: FormService) {
}
//Create ngOnInit() and and load forms
ngOnInit(): void {
     this.getAllForms();
}
//Fetch all forms
 
getAllForms() {
        this.formService.getAllForms()
         .subscribe(
data => this.allForms = data,
                errorCode => this.statusCode = errorCode);
                
}
//Handle create and update form
onFormFormSubmit() {
     this.processValidation = true;
     if (this.formForm.invalid) {
     return; //Validation failed, exit from method.
     }
     //Form is valid, now perform create or update
this.preProcessConfigurations();
     let form = this.formForm.value;
     if (this.formIdToUpdate === null) {
     //Generate form id then create form
this.formService.getAllForms()
     .subscribe(forms => {
            
         //Generate form id    
         let maxIndex = forms.length - 1;
         let formWithMaxIndex = forms[maxIndex];
         let formId = formWithMaxIndex.id + 1;
         form.id = formId;
         console.log(form,'this is form data---');
         //Create form
    this.formService.createForm(form)
             .subscribe(successCode => {
                    this.statusCode = successCode;
                    this.getAllForms();  
                    this.backToCreateForm();
                 },
                 errorCode => this.statusCode = errorCode
             );
         });        
     } else {
  //Handle update form
form.id = this.formIdToUpdate;        
     this.formService.updateForm(form)
     .subscribe(successCode => {
         this.statusCode = successCode;
                 this.getAllForms();  
                    this.backToCreateForm();
             },
         errorCode => this.statusCode = errorCode);  
     }
}
//Load form by id to edit
loadFormToEdit(formId: string) {
this.preProcessConfigurations();
this.formService.getFormById(formId)
     .subscribe(form => {
            console.log(form,'poiuytre');
         this.formIdToUpdate = form.id;
                    this.formForm.setValue({ title: form.title, category: form.category });
                    this.processValidation = true;
                    this.requestProcessing = false;
         },
         errorCode => this.statusCode = errorCode);
}
//Delete form
deleteForm(formId: string) {
this.preProcessConfigurations();
this.formService.deleteFormById(formId)
     .subscribe(successCode => {
         //this.statusCode = successCode;
                    //Expecting success code 204 from server
                    this.statusCode = 204;
                 this.getAllForms();  
                 this.backToCreateForm();
             },
         errorCode => this.statusCode = errorCode);
}
//Perform preliminary processing configurations
preProcessConfigurations() {
this.statusCode = null;
     this.requestProcessing = true;
}
//Go back from update to create
backToCreateForm() {
this.formIdToUpdate = null;
this.formForm.reset(); 
     this.processValidation = false;
}
}