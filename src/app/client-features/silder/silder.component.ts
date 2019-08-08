import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { GeneralService } from 'src/app/services/general.service';
import { environment } from 'src/environments/environment.prod';
// declare var jQuery: any;
// declare var $ : any;
@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SilderComponent implements OnInit {
  public environment;
  public images = [];
  constructor(public generalService: GeneralService) {
    this.environment = environment;
   }

  ngOnInit() {
    this.generalService.getSliderImages().subscribe(i => {
      this.images = i;
    });
    // window['$'] = window['jQuery'] = $;
    // console.log('documenta data',$(document));
    // $(document).ready(function(){
    //   console.log($(".iAmTest"))
    //   $(".iAmTest").startslider({
    //     slideTransitionSpeed: 1800,
    //     slideTransitionEasing: "easeInOutExpo",
    //     slidesDraggable: true,
    //     sliderResizable: true
    //     });
    // });

  }

}
