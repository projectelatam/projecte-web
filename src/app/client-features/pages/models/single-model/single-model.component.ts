import { Component, OnInit } from '@angular/core';
import { ModelsService } from 'src/app/services/models.service';
import { NgxGalleryAnimation, NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { ActivatedRoute } from '@angular/router';
import { ModelsModelView } from '../../../../models/models-model-view'

@Component({
  selector: 'app-single-model',
  templateUrl: './single-model.component.html',
  styleUrls: ['./single-model.component.scss']
})
export class SingleModelComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  public modelId;
  public model;
  public modelData;
  constructor(
    public modelService: ModelsService,
    public route: ActivatedRoute
  ) {
    this.modelId = +this.route.snapshot.params.id;
    console.log(this.modelId);
    this.modelService.getModel(this.modelId).subscribe(data => {
      this.modelData = data;
      this.model = new ModelsModelView(this.modelData);
      this.addImages();
    });
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '830px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '830px',
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
    this.galleryImages = [];
  }

  public getImageUrl(url) {
    return "http://localhost:1337/" + url;
  }

  public addImages() {
    const images = this.modelData.images;
    for (let index = 0; index < images.length; index++) {
      this.galleryImages.push({ 
          small: this.getImageUrl(images[index].url),
          medium: this.getImageUrl(images[index].url),
          big: this.getImageUrl(images[index].url)
        })
    }
  }
}
