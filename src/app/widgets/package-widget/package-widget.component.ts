import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-package-widget',
  templateUrl: './package-widget.component.html',
  styleUrls: ['./package-widget.component.scss']
})
export class PackageWidgetComponent implements OnInit {
  public enviroment = environment;
  @Input() public data;
  constructor() { }

  ngOnInit() {
  }

}
