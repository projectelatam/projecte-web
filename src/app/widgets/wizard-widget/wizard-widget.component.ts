import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-wizard-widget',
  templateUrl: './wizard-widget.component.html',
  styleUrls: ['./wizard-widget.component.scss']
})
export class WizardWidgetComponent implements OnInit {
  form: FormGroup;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  dateMessage: string = '';
  @Input() data: any = {};

  constructor(
    private _formBuilder: FormBuilder,
    private fb: FormBuilder
  ) {

    // this.form = this.fb.group({
    //   chin: ['', Validators.required],
    //   chon: ['', Validators.required]
    // });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      chin: [this.data.params.chin, Validators.required],
      chon: [this.data.params.chon, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    if (this.data.params.chin || this.data.params.chon) {
      this.dateMessage = "Please Select Your Dates to continue"
    }
  }
}
