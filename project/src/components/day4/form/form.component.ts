import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  //  Validation //
  nameReq="" ; 
  ageReq = "";
  emailReq = "";

  myRegForm = new FormGroup({
    name:new FormControl(null,[Validators.required , Validators.minLength(3)]),
    age:new FormControl(null,[Validators.min(20), Validators.max(30) , Validators.required]),
    email : new FormControl(null, [Validators.email, 
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), Validators.required])
  })

  get NameValid(){
    return this.myRegForm.controls.name.valid
  }
  get AgeValid(){
    return this.myRegForm.controls.age.valid
  }

  get EmailValid(){
    return this.myRegForm.controls.email.valid
  }


  displayData(){
    if(this.myRegForm.valid){

      console.log(this.myRegForm.value);
     
    }else{
      this.nameReq  =  "Name Required" ;
      this.ageReq   =  "Age Required" ; 
      this.emailReq = "Email Required" ;
      console.log("Enter valid data");
      console.log("Name Valid: ",this.myRegForm.controls.name.valid);
      console.log("Age Valid: ",this.myRegForm.controls.age.valid);
      console.log("Email Valid: ",this.myRegForm.controls.email.valid);
      
    }
  
  }
}




