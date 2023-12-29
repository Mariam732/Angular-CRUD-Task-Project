import { CommonModule } from '@angular/common';
import { Component, Output , EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-regestration',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './regestration.component.html',
  styleUrl: './regestration.component.css'
})
export class RegestrationComponent {
uname = "" ;
uage = "";

// name = "mariam";


// Passing obj from Regestration to parent(App-component)

// 2) create event
@Output() myEvent = new EventEmitter();

get isNameValid(){
  if(this.uname && this.uname.length>3){
    return true
  }else{
    return false
  }
}


get isAgeValid(){
  if(this.uage && +this.uage>20 && +this.uage<30){
    return true
  }else{
    return false
  }
}
//3,4) fire event and send data
fireNow(){
  
// 1) Data will passed from regesiter to parent
 let std= { name:this.uname, age: this.uage};
  if(this.isNameValid && this.isAgeValid){

    this.myEvent.emit(std);
  }
  console.log(std);
  
}







}














