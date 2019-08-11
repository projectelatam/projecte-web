import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/shared';
import { ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-model-list-widget',
  templateUrl: './model-list-widget.component.html',
  styleUrls: ['./model-list-widget.component.scss']
})
export class ModelListWidgetComponent implements OnInit {

  // public models;
  // @Input() public data: object = null;
  @Input() public models: object = null;
  constructor(
    public modelService: ModelsService,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
    // if (!this.data) {
    //   this.modelService.getModels().subscribe(data => {
    //     this.models = data;
    //   });
    // } else {
    //   this.models = this.data;
    // }
  }

  getImageUrl(url) {
    console.log(environment.apiUrl + url)
    return environment.apiUrl + url;
  }
}
