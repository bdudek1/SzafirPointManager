import LitterDTO from "./LitterDTO";

class LitterDTOBuilder {
    name;
    birthDate;
    race;
    mother;
    father;
    kittens;
    photo;
    galleryLink;

    setName (name) {
        this.name = name;
        return this;
    }

    setBirthDate (birthDate) {
        this.birthDate = birthDate;
        return this;
    }

    setRace (race) {
        this.race = race;
        return this;
    }

    setMother (mother) {
        this.mother = mother;
        return this;
    }

    setFather (father) {
        this.father = father;
        return this;
    }

    setKittens (kittens) {
        this.kittens = kittens;
        return this;
    }

    setPhoto (photo) {
        this.photo = photo;
        return this;
    }

    setGalleryLink (galleryLink) {
        this.galleryLink = galleryLink;
        return this;
    }

    build () {
        return new LitterDTO(name, birthDate, race, mother, father, kittens, photo, galleryLink);
    }

};

export default LitterDTOBuilder