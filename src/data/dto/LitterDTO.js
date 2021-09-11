class LitterDTO {
    name;
    birthDate;
    race;
    mother;
    father;
    kittens;
    photo;
    galleryLink;

    constructor(name, birthDate, race, mother, father, kittens, photo, galleryLink) {
        this.name = name
        this.birthDate = birthDate
        this.race = race
        this.mother = mother
        this.father = father
        this.kittens = kittens
        this.photo = photo
        this.galleryLink = galleryLink
    }

}

export default LitterDTO