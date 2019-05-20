import { Component, OnInit, NgModule } from '@angular/core';
import { ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

NgModule({
  imports: [
    Component,
    MatPaginator,
    MatTableDataSource
  ]
})

export interface OfferedCourses {
  course: any;
  time1: any;
  time2: any;
}

@Component({
  selector: 'app-offered-courses',
  templateUrl: './offered-courses.page.html',
  styleUrls: ['./offered-courses.page.scss'],
})

export class OfferedCoursesPage implements OnInit {
  displayedColumns: string[] = ['course', 'time'];
  dataSource = new MatTableDataSource<OfferedCourses>(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: OfferedCourses[] = [
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
  {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'}
];
