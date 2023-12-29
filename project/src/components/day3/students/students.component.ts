import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  // @Input()Student:Student={};
  // AllStudents:Student[]=[];

  //  newStudent:any;
  @Input() students: { name: string, age: string }[] = [];
}
