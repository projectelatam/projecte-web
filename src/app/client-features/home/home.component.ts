import { Component, OnInit } from '@angular/core';
import { ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public models;
  constructor(public modelService: ModelsService) { }

  ngOnInit() {
    this.modelService.getModels().subscribe(data =>{
      this.models = data;
    });
  }

  getImageUrl(url){
    return "http://localhost:1337/" + url;
  }

}
