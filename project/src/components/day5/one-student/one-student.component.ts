
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { DemoService } from '../../../app/services/demo.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirective } from '../../../app/Directive/custom.directive';
import { CustomPipe } from '../../../app/Pipe/custom.pipe';

@Component({
  selector: 'app-one-student',
  standalone: true,
  imports: [RouterLink, HttpClientModule , RouterModule , CustomDirective , CustomPipe],
  providers :[DemoService] ,
  templateUrl: './one-student.component.html',
  styleUrl: './one-student.component.css'
})
export class OneStudentComponent {
 @Input() oneStd:any;

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
