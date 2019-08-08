import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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
  params: any = { chin: '', chon: '' };
  @Input() data: any = {};

  constructor(
    private _formBuilder: FormBuilder,
    private fb: FormBuilder
  ) {

    // this.form = this.fb.group({
    //   chin: ['', Validators.required],
    //   chon: ['', Validators.required]
    // });
    this.params = { chin: '', chon: '' };
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  public ngOnChanges(c: SimpleChanges) {
    if (c['data']) {
      this.params = { ...this.data.params };
      this.params.chin = this.params.chin || '';
      this.params.chon = this.params.chin || '';

      this.firstFormGroup = this._formBuilder.group({
        chin: [this.params.chin, Validators.required],
        chon: [this.params.chon, Validators.required]
      });

      if (!this.params.chin || !this.params.chon) {
        this.dateMessage = "Please Select Your Dates to continue"
      }
    }

    console.log('params', this.params);
 


  }
}
