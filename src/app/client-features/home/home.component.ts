import { Component, OnInit } from '@angular/core';
import { ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public s = [1, 2, 3, 4, 5, 6, 7, 8 , 9];
  public models;
  constructor(public modelService: ModelsService) { }

  ngOnInit() {
    this.models = this.modelService.getModels();
  }

  getImageUrl(i){
    var id = i % 6 || 1;
    return "assets/" + id + ".jpeg";
  }

}
