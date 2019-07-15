import { Injectable } from '@angular/core';

interface ModelDetail {
  skin: string;
  height: number;
  origin: string;
  ethnicity: string
  languages: string;
  occupation: string;
  personality: string;
  age: number;
  image: string;
  rate: object;
  tattos: string; //use enums
  availability: string;
  orientation: string;

}
interface Model {
  id: number;
  name: string;
  description: string;
  shortDesc:string;
  details: ModelDetail;
  category: number;
  ImgProfile: string;
  
}

@Injectable({
  providedIn: 'root'
})

export class ModelsService {
  public models: Model[] = [
    { 
      id: 1,  
      name: "fancisca",
      description: 'an exotic upscale beauty that is a true “free spirit”.  Her gift of giving and then tuning into your energy will provide you with a uniqueness of understanding and fulfillment that will be felt in her favorite way of expression......body language!!!! ',
      shortDesc: 'We are so glad for you to meet Ruby.......',
      ImgProfile: '',
      category: 1,
      details: { 
        skin: '',
        height: 5.3,
        origin: 'Venezuela',
        ethnicity: 'Latin',
        languages: 'Spanish, English',
        occupation: 'Promoter',
        personality: '',
        age: 25,
        image: '',
        rate: {},
        tattos: '',
        availability: '',
        orientation: 'hetero'
      }
    }
  ];
  
  constructor() { }

  public getModels() {
    return this.models;
  }

  public getModel(id){
    console.log('id', id)
    console.log('this.models.find(m => m.id == id)', this.models.find(m => m.id == id))
    return this.models.find(m => m.id == id);
  }
}
