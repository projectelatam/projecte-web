import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperServiceService } from 'src/app/shared/helper-service.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  public packages = []; // renamme to pakages

  constructor(
    public route: ActivatedRoute,
    public hm: HelperServiceService,
    public generalService: GeneralService,
    private router: Router
  ) { }

  ngOnInit() {
    this.generalService.getPackages().subscribe(a => {
      this.fillUpRelatedPackages(a);
    });
  }

  public fillUpRelatedPackages(pkgs) {
    pkgs.forEach(sp => {
      if (sp.relatedpackage === null || sp.relatedpackage.id === null) return;
      this.generalService.getRelatedPackage(sp.relatedpackage.id).subscribe(rp => {
        rp.packages.map(p => p.accommodation = sp.accommodation);
        sp.relatedpackage = rp
        this.packages.push(sp);
      })
    });
  }

  public doNotShowTheSamePkg(pkgId, pkgId2) {
    return pkgId !== pkgId2;
  }

}
