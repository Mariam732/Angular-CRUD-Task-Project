import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DemoService } from '../../../app/services/demo.service';

@Component({
  selector: 'app-updates',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule , HttpClientModule],
  providers:[DemoService],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.css'
})
export class UpdatesComponent {

  myRegForm = new FormGroup({
    name:new FormControl(null,[Validators.required]),
    phone:new FormControl(null, [Validators.required]),
    email : new FormControl(null, [Validators.email, 
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), Validators.required])
  })

  ID =0;

  constructor(private myService:DemoService,private router:Router , myActivated:ActivatedRoute){
    this.ID = myActivated.snapshot.params["id"];
    console.log("ID : "+this.ID);
  }


 


  update()
  {

    let name=this.myRegForm.controls.name.value;

    let email=this.myRegForm.controls.email.value;
    let phone=this.myRegForm.controls.phone.value;

    let updateStudent={name,email,phone};

    this.myService.updateUser(this.ID, updateStudent).subscribe({
      next:(data:any)=>{
        // console.log(data)
        updateStudent = data;
        console.log(updateStudent);
        
      },
      complete:()=>{ this.router.navigateByUrl('/users');} ,

      error:()=>{console.log("7asal Error")}
    })


    
  }

}