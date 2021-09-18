import LitterDTO from "./LitterDTO";

class LitterDTOBuilder {
    private name :string = '';
    private birthDate :Date = new Date();
    private race :string = '';
    private mother :string = '';
    private father :string = '';
    private kittens :Array<object> = new Array();
    private photo :Blob = new Blob();
    private galleryLink :string = '';

    setName (name :string) {
        this.name = name;
        return this;
    }

    setBirthDate (birthDate :Date) {
        this.birthDate = birthDate;
        return this;
    }

    setRace (race :string) {
        this.race = race;
        return this;
    }

    setMother (mother :string) {
        this.mother = mother;
        return this;
    }

    setFather (father :string) {
        this.father = father;
        return this;
    }

    setKittens (kittens :Array<object>) {
        this.kittens = kittens;
        return this;
    }

    setPhoto (photo :Blob) {
        this.photo = photo;
        return this;
    }

    setGalleryLink (galleryLink :string) {
        this.galleryLink = galleryLink;
        return this;
    }

    build () {
        return new LitterDTO(this.name, this.birthDate, this.race, this.mother, this.father, this.kittens, this.photo, this.galleryLink);
    }

};

export default LitterDTOBuilder