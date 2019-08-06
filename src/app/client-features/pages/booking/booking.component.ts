import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperServiceService } from 'src/app/shared/helper-service.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public places = [1, 2, 3, 4, 5, 6, 7, 8]
  public accomodations = []; // renamme to pakages
  constructor(
    public route: ActivatedRoute,
    public hm: HelperServiceService,
    public generalService: GeneralService
  ) {
    console.log(this.route.snapshot.queryParams)
  }

  public openDialog(packageId){
    this.hm.OpenWizardDialog();
  }

  ngOnInit() {
    this.generalService.getPackages().subscribe(a => {
      this.accomodations = a;
    });
    // if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.p) {
    //   this.page = +this.route.snapshot.queryParams.p;
    // }


    // private setRouterParams(): void {
    //   this.router.navigate([], { relativeTo: this.route, queryParams: { p: this.page }, replaceUrl: this.replace });
    //   this.replace = false;
    // }
  }

}
