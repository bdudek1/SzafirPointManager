class CatDTO {
    private name: string;
    private sex :string;
    private color :string;
    private availability :string;
    private photo :Blob;

    constructor(name :string, sex :string, color :string, availability :string, photo :Blob) {
        this.name = name
        this.sex = sex
        this.color = color
        this.availability = availability
        this.photo = photo
    }

    public getName() :string {
        return this.name;
    }

    public getSex() :string {
        return this.sex;
    }

    public getColor() :string {
        return this.color;
    }

    public getAvailability() :string {
        return this.availability;
    }

    public getPhoto() {
        return this.photo;
    }


}

export default CatDTO