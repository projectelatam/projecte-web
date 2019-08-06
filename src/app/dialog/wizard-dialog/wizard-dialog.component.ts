import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-wizard-dialog',
  templateUrl: './wizard-dialog.component.html',
  styleUrls: ['./wizard-dialog.component.scss']
})
export class WizardDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WizardDialogComponent>, // createa a dialog module
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(DOCUMENT) document: ElementRef
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    // this.document.getElement('')
  }

}
