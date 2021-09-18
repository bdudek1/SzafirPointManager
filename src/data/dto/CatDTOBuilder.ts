import CatDTO from "./CatDTO";
import IndexedCatDTO from "./IndexedCatDTO";

class CatDTOBuilder  {
    private name :string = '';
    private sex :string = '';
    private color :string = '';
    private availability :string = '';
    private photo :Blob = new Blob();
    private id :number = 0;

    public setName (name :string) {
        this.name = name;
        return this;
    }

    public setSex (sex :string) {
        this.sex = sex;
        return this;
    }

    public setColor (color :string) {
        this.color = color;
        return this;
    }
    
    public setAvailability (availability :string) {
        this.availability = availability;
        return this;
    }

    public setPhoto (photo :Blob) {
        this.photo = photo;
        return this;
    }

    public setId (id :number) {
        this.id = id;
        return this;
    }

    public build () {
        if(this.id === 0){
            return new CatDTO(this.name, this.sex, this.color, this.availability, this.photo);
        }else{
            return new IndexedCatDTO(this.name, this.sex, this.color, this.availability, this.photo, this.id);
        }
        
    }

};

export default CatDTOBuilder