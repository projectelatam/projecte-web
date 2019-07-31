export class ModelsModelView{
    public myList = [];
    public modelShort = [];
    constructor(public model){
        console.log(this.model);
        this.createModelView()
    }

    public createModelView(){
        this.myList = [
            { name: 'Skin', value: this.model.skin || '', desc: '' },
            { name: 'Height', value: this.model.height || '', desc: '' },
            { name: 'Origin', value: this.model.origin || '', desc: '' },
            { name: 'Languages', value: this.model.languages || '', desc: '' },
            { name: 'Occupation', value: this.model.occupation || '', desc: '' },
            { name: 'Personality', value: this.model.personality || '', desc: '' },
            { name: 'Age', value: this.model.age || '', desc: '' },
        ]
        this.modelShort = [
            { name: 'Skin', value: this.model.skin || '', desc: '' },
        ]
    }
}