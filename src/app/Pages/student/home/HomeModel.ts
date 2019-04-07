export class Dashboard {
    UserID:any;
    Semesters: Array<Semester>;
    Courses: Array<Course>;
}

export class Semester{
    ID:any;
    Title:any;
}

export class Course {
    ID:any;
    Title:any;
    Section:any;
    Status:any;
    Grade:any;
    Marks:any;
    SemesterID:any;
}

export class Classes {
    ID: any;
    SectionID: any;
    SectionDescription: any;
    Room: any;
    Time: any;
}

export class Schedule {
    ClassRoutineDate: any;
    Classes: Classes;
}
