import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ProfileModel } from '../Pages/profile/student/profileModel';

@Injectable({
  providedIn: 'root'
})

export class ProfileApiService {

  private dummyProfile: object;
  
  constructor(public http: HttpClient) {
    console.log('Hello Profile Provider');
    this.dummyProfile = {"studentName": "Abhijit Mondal Abhi",
       "studentId": "13-24025-2",
       "cgpa": "3.00",
       "credit": "148",
       "program": "CSE",
       "department": "Computer Science",
       "core": "BSc",
       "fatherName": "Abcd Efg",
       "motherName": "Hij Klm",
       "presentAddress": "Dhaka",
       "permanentAddress": "Dhaka",
       "phone": "01719000000",
       "email": "abhi@aiub.edu",
       "dob": "10-11-1970",
       "sex": "Male",
       "nationality": "Bangladeshi",
       "religion": "",
       "maritalStatus": "",
       "bloodGroup": "",
       "admissionDate": "",
       "graduationDate": "" };
   }

  public getUserProfile(): Observable<ProfileModel>
  {
    return 
  }
}
