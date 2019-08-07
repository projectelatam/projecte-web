import { Component, OnInit, Input } from '@angular/core';
import { HelperServiceService } from 'src/app/shared/helper-service.service';

@Component({
  selector: 'app-book-card-package',
  templateUrl: './book-card-package.component.html',
  styleUrls: ['./book-card-package.component.scss']
})
export class BookCardPackageComponent implements OnInit {
  @Input() public package = {}; // renamme to pakages
  @Input() public expanded: boolean = false;
  @Input() public params:any  = {};
  @Input() public normalState:boolean = false;

  constructor(public hm: HelperServiceService,) {}

  ngOnInit() {}

  public getImage(d){
    switch(d){
      case 'Penthouse':
        return 'fa-gem';
    }
  }
}
