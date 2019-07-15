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
    this.modelData = this.modelService.getModel(this.modelId);
    this.model = new ModelsModelView(this.modelData);
    console.log(this.model);
  }

  ngOnInit() {
    console.log(this.modelService.getModels());
    this.galleryOptions = [
      {
        width: '100%',
        height: '550px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
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
    this.addImages();

  }

  public getImageUrl(i) {
    var id = i % 6 || 1;
    return "assets/" + id + ".jpeg";
  }

  public addImages() {
    for (let index = 0; index < 9; index++) {
      this.galleryImages.push({ small: this.getImageUrl(index), medium: this.getImageUrl(index), big: this.getImageUrl(index) })
    }
  }
}
