import { Component, OnInit, Input } from '@angular/core';
import { HelperServiceService } from 'src/app/shared/helper-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-card-package',
  templateUrl: './book-card-package.component.html',
  styleUrls: ['./book-card-package.component.scss']
})
export class BookCardPackageComponent implements OnInit {
  @Input() public package = {
    name: '',
    accommodation: {
      name: '',
      descriptiono: '',
      roomType: '',
      profile: { url: '' },
      gallery: [{ url: '' }],
      type: '',
      shortDesc: '',
      rooms: 0,
      starts: 0,
      rate: 0,
    }
  }; // renamme to pakages
  @Input() public expanded: boolean = false;
  @Input() public params: any = {};
  @Input() public normalState: boolean = false;
  public environment;

  constructor(public hm: HelperServiceService, ) {
    this.environment = environment;
  }

  ngOnInit() { }

  public getImage(d) {
    switch (d) {
      case 'Penthouse':
        return 'fa-gem';
    }
  }

  public maxPeopleDesc(p) {
    switch (p) {
      case 2:
        return 'You and your playmate';
      case 4:
        return '2 guest and 2 playmate'
    }
  }
}
