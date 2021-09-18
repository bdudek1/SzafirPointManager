import LitterDTO from './LitterDTO'

class IndexedLitterDTO extends LitterDTO {
    private id :number;

    constructor(name :string, birthDate :Date, race :string, mother :string, father :string,
        kittens :Array<object>, photo :Blob, galleryLink :string, id :number) {

        super(name, birthDate, race, mother, father, kittens, photo, galleryLink)

        this.id = id;
    }

    public getId() {
        return this.id;
    }

}

export default IndexedLitterDTO