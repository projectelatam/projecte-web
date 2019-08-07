import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-accomodation-detail-widget',
  templateUrl: './accomodation-detail-widget.component.html',
  styleUrls: ['./accomodation-detail-widget.component.scss']
})
export class AccomodationDetailWidgetComponent implements OnInit {
  // refactor the gallery to have a component for it
  @Input() public data: any = {};
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  constructor() { }

  ngOnChanges(c: SimpleChanges) {
    if (c['data']) {
      this.addImages();
      console.log(this.data);
    }
  }

  ngOnInit() {
    this.setGallery()
  }

  public setGallery() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '400px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: false
      }
    ];
  }

  public getImageUrl(url) {
    return "http://localhost:1337/" + url;
  }

  public addImages() {
    const images = this.data.data.gallery;
    for (let index = 0; index < images.length; index++) {
      this.galleryImages.push({
        small: this.getImageUrl(images[index].url),
        medium: this.getImageUrl(images[index].url),
        big: this.getImageUrl(images[index].url)
      })
    }
  }

}
