import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,  FormControl,  FormGroup,  FormBuilder,  Validators, } from '@angular/forms';
import { ContactService } from './service/contact.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormControl,
    FormGroup,
    HttpClientModule
]
})
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  
    constructor(private formBuilder: FormBuilder,
                private _contactService: ContactService){
  
    }
    emailFrom = new FormControl('', [Validators.required, Validators.email]);
    emailTo = 'ambre.naude@hotmail.fr';
  
  
    ngOnInit(){
      this.osef();
      this.editForm = this.formBuilder.group({
        emailFrom: ['', [Validators.required, Validators.email]],
        emailTo: ['ambre.naude@hotmail.fr', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.toString]],
        objet: ['', [Validators.required, Validators.toString]]
      });
      
    }
    get f() {
      return this.editForm.controls;
    }
  
    async osef() {
      this._contactService.sendEmail;
    }
  
    actionConfirm() {
      this.submitted = true;
      const dataObjectForm = this.editForm.value;
      console.log("Je rentre dans motdepasse.actionConfirm avec comme valeur d'email :", this.editForm.value);
  
      if (dataObjectForm.email) {
        this._contactService.sendEmail(dataObjectForm.email);
              alert("Envoyé! Vous allez recevoir un email (Regardez vos spam)");
              if (this._contactService.sendEmail) {
               // this.router.navigate(['/']);
              }
        }
    }
  }
  