import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reto';
  constructor(private formbuilder: FormBuilder){}
  registroform = this.formbuilder.group({
    nombres: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]
    }],
    apellidos: ['', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern("/[A-Za-z]\s[A-Za-z]*")
      ]
    }],
    email: ['', {
      validators: [
        Validators.required,
        Validators.email
      ]
    }],
    website: ['', {
      validators: [
        Validators.required,
      ]
    }],
  })

  get nombres() { return this.registroform.get('nombres') }
  get apellidos() { return this.registroform.get('apellidos') }
  get email() { return this.registroform.get('email') }
  get website() { return this.registroform.get('website') }

  res="";
  save(){
    this.registroform.controls.nombres.value
    this.registroform.controls.apellidos.value
    this.registroform.controls.email.value
    this.registroform.controls.website.value
    this.res= "Registro guardado"
    console.log("guardado")
  }
}
