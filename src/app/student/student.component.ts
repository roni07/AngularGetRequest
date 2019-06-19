import { Component, OnInit } from '@angular/core';
import {Student} from './student';
import {StudentService} from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student[];
  constructor(private serviceS: StudentService) { }

  ngOnInit() {
    this.serviceS.getAllStudents()
      .subscribe((data) => console.log(data));
  }

}
