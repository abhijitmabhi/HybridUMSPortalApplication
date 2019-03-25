
import { Component, OnInit } from '@angular/core';
import { ProfileApiService } from 'src/app/Services/student/profile-api.service';
import { ProfileModel } from './profileModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profile: ProfileModel;

  constructor(private profileProvider: ProfileApiService) {
    
   }

  ngOnInit() {
    this.profile = {
      studentName: "Abhijit Mondal Abhi",
      studentId: "13-24025-2",
      cgpa: "3.00",
      credit: "148",
      program: "CSE",
      department: "Computer Science",
      core: "BSc",
      fatherName: "Abcd Efg",
      motherName: "Hij Klm",
      presentAddress: "Dhaka",
      permanentAddress: "Dhaka",
      phone: "01719000000",
      email: "abhi@aiub.edu",
      dob: "10-11-1970",
      sex: "Male",
      nationality: "Bangladeshi",
      religion: "",
      maritalStatus: "",
      bloodGroup: "",
      admissionDate: "",
      graduationDate: "" 
    };
  }



}
