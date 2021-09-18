class LitterDTO {
    private name :string;
    private birthDate :Date;
    private race :string;
    private mother :string;
    private father :string;
    private kittens :Array<object>;
    private photo :Blob;
    private galleryLink :string;

    constructor(name :string, birthDate :Date, race :string, mother :string, father :string,
                kittens :Array<object>, photo :Blob, galleryLink :string) {
        this.name = name
        this.birthDate = birthDate
        this.race = race
        this.mother = mother
        this.father = father
        this.kittens = kittens
        this.photo = photo
        this.galleryLink = galleryLink
    }

    public getName() {
        return this.name
    }

    public getBirthDate () {
        return this.birthDate
    }

    public getRace() {
        return this.race
    }

    public getMother() {
        return this.mother
    }

    public getFather() {
        return this.father
    }

    public getKittens() {
        return this.kittens
    }

    public getPhoto() {
        return this.photo
    }

    public getGalleryLink() {
        return this.galleryLink
    }

}

export default LitterDTO