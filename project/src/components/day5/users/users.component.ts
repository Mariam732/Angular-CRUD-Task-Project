import { Component, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DemoService } from '../../../app/services/demo.service';
import { OneStudentComponent } from '../one-student/one-student.component';
import { CustomDirective } from '../../../app/Directive/custom.directive';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule, RouterModule , OneStudentComponent , CustomDirective],
  providers :[DemoService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  ID = 0;
  constructor( private myService : DemoService , myActivated:ActivatedRoute , private router:Router){

    this.ID = myActivated.snapshot.params["id"];
    console.log("ID : "+this.ID);
  }

  
  AllUsers:any;
  ngOnInit(): void {
      // console.log(this.myService.getAllUsers());
      //to get data we use subsribe
      this.myService.getAllUsers().subscribe({
      next:(data)=>{
        console.log(data)
        this.AllUsers = data;
      },
      error:()=>{console.log("7asal Error")}
    })

   
  }
  deleteUser(id:number){
    console.log({id})
    this.myService.deleteUserById(id).subscribe({
      complete:()=>{ this.router.navigate(['newUser'],{
        replaceUrl:false
      }).then(()=>{
        this.router.navigate(['users'])
      });}
      
    })
  }

}
