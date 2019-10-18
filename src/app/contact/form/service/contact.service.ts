import { Injectable } from "@angular/core";
import {  HttpClient,  HttpHeaders} from '@angular/common/http';
import {  FormBuilder} from "@angular/forms";
import {  Router} from "@angular/router";

export enum Endpoints {
  sendEmail = "/sendemail"

}
@Injectable()

export class ContactService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  //pour connexion au backend
  private configJson: any;
  private configJsonLogin: any;
  private url: string;
  public href: string = "";

  constructor(private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {} 
  async onInitCustom() {
    await this.setUrl();
   
  }
  async setUrl() {
    
    //connexion au backend
    this.configJson = await this.http.get('../../assets/config.json').toPromise();
    this.url = this.configJson.url;
    console.log(this.url);
  }

// si le nouveau mot de pass a été créé, on envoie par mail ce password via Sendgrid
  async sendEmail(email: string) {
    console.log('ceci est un text!!');
    let mail = {
      'email': email
    }
    let send = await this.http.post(this.url+Endpoints.sendEmail, mail, this.httpOptions).toPromise();
    console.log('envoyé!!', send);
  }
}
