import { Component, OnInit } from '@angular/core';
import { ModelsService } from 'src/app/services/models.service';
import { AuthenticationService } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public models;
  constructor(
    public modelService: ModelsService,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.modelService.getModels().subscribe(data => {
      this.models = data;
    });
  }

  getImageUrl(url) {
    console.log(environment.apiUrl + url)
    return environment.apiUrl + url;
  }

}
