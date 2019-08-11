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
    this.modelService.getModels(
      /*{ 'id_in': [3,6,8] }*/
      '?id_in=6&id_in=11&id_in=13&id_in=17&id_in=25&id_in=37')
      .subscribe(data => {
        this.models = data;
      });
  }


}
