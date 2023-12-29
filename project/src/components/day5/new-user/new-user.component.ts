import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DemoService } from '../../../app/services/demo.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule , HttpClientModule],
  providers:[DemoService],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  //  Validation //
  

  myRegForm = new FormGroup({
    name:new FormControl(null,[Validators.required]),
    phone:new FormControl(null, [Validators.required]),
    email : new FormControl(null, [Validators.email, 
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), Validators.required])
  })

  

  constructor(private myService:DemoService,private router:Router){
    
  }

  // AddUser(name:string,  email:string, phone:string){
  //   let name =this.myRegForm.controls.name.value;
  //   let email=this.myRegForm.controls.email.value;
  //   let phone=this.myRegForm.controls.phone.value
  //   let newUser = {name,  email, phone};
  //   this.myService.AddNewUser(newUser).subscribe(
  //     {
  //       complete:()=>{}
  //     }
  //   );
  // }

  send()
  {
    let name=this.myRegForm.controls.name.value;

    let email=this.myRegForm.controls.email.value;
    let phone=this.myRegForm.controls.phone.value;

    let newStudent={name,email,phone};

    this.myService.AddNewUser(newStudent).subscribe({
      complete:()=>{ this.router.navigateByUrl('/users');}
    });
   }
}
