import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  ID:number=0;
 constructor(myActivated:ActivatedRoute){
  // console.log(myActivated);
  
  // console.log(myActivated.snapshot.params["id"]);
  this.ID = myActivated.snapshot.params["id"];
  
 }
}
