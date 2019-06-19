import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpService: HttpClient) { }
  getAllStudents(): Observable<Student[]> {
    return this.httpService.get<Student[]>('http://localhost:8082/student/all');
  }
}
