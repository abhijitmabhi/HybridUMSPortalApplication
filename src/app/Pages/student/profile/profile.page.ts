import { Component, OnInit } from '@angular/core';
import { ProfileApiService } from 'src/app/Services/student/profile-api.service';
import { LoadingService } from 'src/app/core/loader/loading.service';
import { DialogOverviewExampleDialog } from 'src/app/Core/dialog/dialog/dialog.component';
import { MatDialog } from '@angular/material';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profile: object;
  public errorMsg: any;

  //For Dialog
  animal: string;
  name: string;

  constructor(
    private profileApiService: ProfileApiService,
    private loadingService: LoadingService,
    public dialog: MatDialog
    ) {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.loadingService.loadingStart();
    this.profileApiService.getStudentProfile().subscribe(res => {
      this.loadingService.loadingDismiss();
      this.profile = res.Data;
    },
    error => {
      this.loadingService.loadingDismiss();
      this.errorMsg = error;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

