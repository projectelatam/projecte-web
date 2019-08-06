import { Component, OnInit } from '@angular/core';
import { ModelsService } from 'src/app/services/models.service';
import { AuthenticationService } from 'src/app/shared';


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
    return "http://localhost:1337/" + url;
  }

}
