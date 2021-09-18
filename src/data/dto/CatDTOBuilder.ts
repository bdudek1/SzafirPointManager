import CatDTO from "./CatDTO";

class CatDTOBuilder  {
    private name :string = '';
    private sex :string = '';
    private color :string = '';
    private availability :string = '';
    private photo :Blob = new Blob();

    setName (name :string) {
        this.name = name;
        return this;
    }

    setSex (sex :string) {
        this.sex = sex;
        return this;
    }

    setColor (color :string) {
        this.color = color;
        return this;
    }
    
    setAvailability (availability :string) {
        this.availability = availability;
        return this;
    }

    setPhoto (photo :Blob) {
        this.photo = photo;
        return this;
    }

    build () {
        return new CatDTO(this.name, this.sex, this.color, this.availability, this.photo);
    }

};

export default CatDTOBuilder