import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { ViewEncapsulation } from '@angular/compiler/src/core';
// declare var jQuery: any;
// declare var $ : any;
@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SilderComponent implements OnInit {
  public images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
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
