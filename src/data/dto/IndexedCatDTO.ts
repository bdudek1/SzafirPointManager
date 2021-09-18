import CatDTO from "./CatDTO"

class IndexedCatDTO extends CatDTO {
    private id :number;

    constructor(name :string, sex :string, color :string, availability :string, photo :Blob, id :number) {
        super(name, sex, color, availability, photo)

        this.id = id;
    }

    public getId() {
        return this.id
    }

    public toNonIndexed() {
        return new CatDTO(this.getName(), this.getSex(), this.getColor(), this.getAvailability(), this.getPhoto());
    }

}

export default IndexedCatDTO