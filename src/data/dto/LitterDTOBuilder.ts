import LitterDTO from "./LitterDTO";
import IndexedLitterDTO from "./IndexedLitterDTO";

class LitterDTOBuilder {
    private name :string = '';
    private birthDate :Date = new Date();
    private race :string = '';
    private mother :string = '';
    private father :string = '';
    private kittens :Array<object> = new Array();
    private photo :Blob = new Blob();
    private galleryLink :string = '';
    private id :number = 0;

    public setName (name :string) {
        this.name = name;
        return this;
    }

    public setBirthDate (birthDate :Date) {
        this.birthDate = birthDate;
        return this;
    }

    public setRace (race :string) {
        this.race = race;
        return this;
    }

    public setMother (mother :string) {
        this.mother = mother;
        return this;
    }

    public setFather (father :string) {
        this.father = father;
        return this;
    }

    public setKittens (kittens :Array<object>) {
        this.kittens = kittens;
        return this;
    }

    public setPhoto (photo :Blob) {
        this.photo = photo;
        return this;
    }

    public setGalleryLink (galleryLink :string) {
        this.galleryLink = galleryLink;
        return this;
    }

    public setId(id :number) {
        this.id = id
        return this;
    }

    public build () {
        if(this.id === 0) {
            return new LitterDTO(this.name, this.birthDate, this.race, this.mother, this.father, this.kittens, this.photo, this.galleryLink);
        } else {
            return new IndexedLitterDTO(this.name, this.birthDate, this.race, this.mother, this.father, this.kittens, this.photo, this.galleryLink, this.id);
        }
    }

};

export default LitterDTOBuilder