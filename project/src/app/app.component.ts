import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';
import { FirstComponent } from '../components/first/first.component';
import { SecondComponent } from '../components/second/second.component';
import { RegestrationComponent } from '../components/day3/regestration/regestration.component';
import { StudentsComponent } from '../components/day3/students/students.component';
// import { HeaderComponent } from '../components/day4/header/header.component';
// import { FooterComponent } from '../components/day4/footer/footer.component';
import { HeaderComponent } from '../components/day5/header/header.component';
import { FooterComponent } from '../components/day5/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    FirstComponent,
    SecondComponent,
    RegestrationComponent,
    StudentsComponent ,
    // HeaderComponent ,
    // FooterComponent ,
    HeaderComponent ,
    FooterComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  uname = "";
  uage = "";
  newStudent: { name: string, age: string } = { name: "", age: "" };
  students: { name: string, age: string }[] = [];

  // getData(newStudent: any) {

  //   if (this.uname.length >= 3 && +this.uage > 20 && +this.uage < 30)
  //     this.students.push(this.newStudent)
  //   console.log(this.students);
  // }


  GetData(data:any){
  this.newStudent = data;
  this.students.push(data);
  console.log(this.students);
  
}
}
