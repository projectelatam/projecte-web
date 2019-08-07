import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccomodationDetailWidgetComponent } from 'src/app/widgets/accomodation-detail-widget/accomodation-detail-widget.component';

@Component({
  selector: 'app-accomodation-dialog',
  templateUrl: './accomodation-dialog.component.html',
  styleUrls: ['./accomodation-dialog.component.scss']
})
export class AccomodationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AccomodationDetailWidgetComponent>, // createa a dialog module
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    // console.log(this.data);
  }

}
