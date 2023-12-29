import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../../app/services/demo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HttpClientModule],
  providers:[DemoService] ,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  ID = 0;
  user:any;
  constructor(private myService:DemoService ,myActivated:ActivatedRoute){
    this.ID = myActivated.snapshot.params["id"];
    console.log("ID : "+this.ID);
  }
  ngOnInit(): void {
    this.myService.getUserById(this.ID).subscribe({
      next:(data)=>{
         console.log(data)
        this.user = data;
      },
      error:()=>{console.log("7asal Error")}
    })
  }

}
