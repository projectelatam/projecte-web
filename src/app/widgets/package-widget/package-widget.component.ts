import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package-widget',
  templateUrl: './package-widget.component.html',
  styleUrls: ['./package-widget.component.scss']
})
export class PackageWidgetComponent implements OnInit {
  @Input() public data;
  constructor() { }

  ngOnInit() {
  }

}
