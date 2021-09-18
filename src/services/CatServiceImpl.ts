import CatService from "./CatService";
import CatDTOBuilder from "../data/dto/CatDTOBuilder";

class CatServiceImpl implements CatService {
    catRepo;

    constructor(catRepo: any) {
        this.catRepo = catRepo
    }

    async getCatByName(name :string) {
        const dbCat =  await this.catRepo.getByName(name)

        return this.buildCat(dbCat)
    }

    async saveCat(cat :object) {
        return await this.catRepo.save(cat)
    }

    async deleteCat(name :string) {
        return await this.catRepo.deleteByName(name)
    }

    async updateCat(cat :object) {
        return await this.catRepo.upate(cat)
    }

    async getAllCats() {
        const dbCats = await this.catRepo.getAll()

        const cats = new Array()

        dbCats.forEach((cat: any) => {
            cats.push(this.buildCat(cat))
        })

        return cats
    }

    async getCatsBySearchQuery(query :string) {
        const dbCats =  await this.catRepo.getBySearchQuery(query)

        const cats = new Array()

        dbCats.forEach((cat: any) => {
            cats.push(this.buildCat(cat))
        })

        return cats
    }

    private buildCat(dbCat :any) {
        const cat = new CatDTOBuilder()
                                       .setName(dbCat.name)
                                       .setSex(dbCat.sex)
                                       .setColor(dbCat.color)
                                       .setAvailability(dbCat.availability)
                                       .setPhoto(dbCat.photo)
                                       .build()

        return cat
    }

}

export default CatServiceImpl