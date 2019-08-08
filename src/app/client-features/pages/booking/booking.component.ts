import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperServiceService } from 'src/app/shared/helper-service.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public places = [1, 2, 3, 4, 5, 6, 7, 8]
  public packages = []; // renamme to pakages
  public params;
  public replace = true;
  constructor(
    public route: ActivatedRoute,
    public hm: HelperServiceService,
    public generalService: GeneralService,
    private router: Router,
  ) {
    this.params = this.route.snapshot.queryParams;
    if (!this.isEmpty(this.params)) {
      console.log('set defaults')
      this.params = this.params = {
        stay: 'all'
      };//set defoulst
      this.setRouterParams()
    }
  }

  public openDialog(packageId) {
    // this.hm.OpenWizardDialog();
  }

  ngOnInit() {
    // const packagesParams = this.params && this.params.packageType ? { type: this.params.packageType } : {};
    const packagesParams = { type: 'standard' };
    console.log('packageparams', packagesParams);
    this.generalService.getPackages(packagesParams).subscribe(a => {
      this.fillUpRelatedPackages(a);
    });

    // if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.p) {
    //   this.page = +this.route.snapshot.queryParams.p;
    // }


    // private setRouterParams(): void {
    //   this.router.navigate([], { relativeTo: this.route, queryParams: { p: this.page }, replaceUrl: this.replace });
    //   this.replace = false;
    // }
  }

  public fillUpRelatedPackages(pkgs) { // move to the controller
    // const standardPkgs = pkgs.filter(p => p.type == 'standard');
    pkgs.forEach(sp => {
      console.log(sp);
      if(sp.relatedpackage === null || sp.relatedpackage.id === null) return;
      this.generalService.getRelatedPackage(sp.relatedpackage.id).subscribe(rp => {
        sp.relatedpackage = rp
        this.packages.push(sp);
        console.log(this.packages)
      })
    });

    // this.generalService.getRelatedPackage()
  }

  public shouldExpand(accomo) {
    if (this.params.stay === 'all') {
      return true
    }
    else {
      return accomo.type == this.params.stay;
    }
  }
  public isEmpty(object) { for (var i in object) { return true; } return false; }
  private setRouterParams(): void {
    this.router.navigate([], { relativeTo: this.route, queryParams: this.params, replaceUrl: this.replace });
    this.replace = false;
  }

}
