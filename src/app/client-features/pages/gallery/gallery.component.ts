import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ModelsService } from 'src/app/services/models.service';
import { AuthenticationService } from 'src/app/shared';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  public models;
  constructor(
    public modelService: ModelsService,
    public auth: AuthenticationService
    ){

  }

  ngOnInit(): void {
    this.modelService.getModels().subscribe(data => {
      this.models = data;
    });

    // this.galleryOptions = [
    //   {
    //     width: '600px',
    //     height: '400px',
    //     thumbnailsColumns: 4,
    //     imageAnimation: NgxGalleryAnimation.Slide
    //   },
    //   // max-width 800
    //   {
    //     breakpoint: 800,
    //     width: '100%',
    //     height: '600px',
    //     imagePercent: 80,
    //     thumbnailsPercent: 20,
    //     thumbnailsMargin: 20,
    //     thumbnailMargin: 20
    //   },
    //   // max-width 400
    //   {
    //     breakpoint: 400,
    //     preview: false
    //   }
    // ];

    // this.galleryImages = [
      // {
      //     small: 'assets/1-small.jpg',
      //     medium: 'assets/1-medium.jpg',
      //     big: 'assets/1-big.jpg'
      // },
      // {
      //     small: 'assets/2-small.jpg',
      //     medium: 'assets/2-medium.jpg',
      //     big: 'assets/2-big.jpg'
      // },
      // {
      //     small: 'assets/3-small.jpg',
      //     medium: 'assets/3-medium.jpg',
      //     big: 'assets/3-big.jpg'
      // }
    // ];
    // this.addImages();
  }


  // getImageUrl(i) {
  //   var id = i % 6 || 1;
  //   return "assets/" + id + ".jpeg";
  // }

  // addImages() {
  //   for (let index = 0; index < 9; index++) {
  //     this.galleryImages.push({ small: this.getImageUrl(index), medium: this.getImageUrl(index), big: this.getImageUrl(index) })

  //   }
  // }

}
