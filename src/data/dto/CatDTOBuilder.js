import CatDTO from "./CatDTO";

class CatDTOBuilder  {
    name;
    sex;
    color;
    availability;
    photo;

    constructor() {

    }

    setName (name) {
        this.name = name;
        return this;
    }

    setSex (sex) {
        this.sex = sex;
        return this;
    }

    setColor (color) {
        this.color = color;
        return this;
    }
    
    setAvailability (availability) {
        this.availability = availability;
        return this;
    }

    setPhoto (photo) {
        this.photo = photo;
        return this;
    }

    build () {
        return new CatDTO(this.name, this.sex, this.color, this.availability, this.photo);
    }

};

export default CatDTOBuilder