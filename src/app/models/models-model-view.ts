export class ModelsModelView{
    public myList = [];
    public modelShort = [];
    constructor(public model){
        console.log(this.model, 'model model view')
        this.createModelView()
    }

    public createModelView(){
        this.myList = [
            { name: 'Skin', value: this.model.details.skin, desc: '' },
            { name: 'Height', value: this.model.details.height, desc: '' },
            { name: 'Origin', value: this.model.details.origin, desc: '' },
            { name: 'Languages', value: this.model.details.languages, desc: '' },
            { name: 'Occupation', value: this.model.details.occupation, desc: '' },
            { name: 'Personality', value: this.model.details.personality, desc: '' },
            { name: 'Age', value: this.model.details.age, desc: '' },
        ]
        this.modelShort = [
            { name: 'Skin', value: this.model.skin, desc: '' },
        ]
    }
}