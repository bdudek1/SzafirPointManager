import CatService from "./CatService";
import CatDTOBuilder from "../data/dto/CatDTOBuilder";

class CatServiceImpl extends CatService {
    catRepo;

    constructor(catRepo) {
        super()
        this.catRepo = catRepo
    }

    async getCatByName(name) {
        const dbCat =  await this.catRepo.getByName(name)

        return this.buildCat(dbCat)
    }

    async saveCat(cat) {
        return await this.catRepo.save(cat)
    }

    async deleteCatByName(name) {
        return await this.catRepo.deleteByName(name)
    }

    async updateCat(cat) {
        return await this.catRepo.upate(cat)
    }

    async getAllCats() {
        const dbCats = await this.catRepo.getAll()

        const cats = new Array()

        dbCats.forEach(cat => {
            cats.push(this.buildCat(cat))
        })

        return cats
    }

    async getCatsBySearchQuery(query) {
        const dbCats =  await this.catRepo.getBySearchQuery(query)

        const cats = new Array()

        dbCats.forEach(cat => {
            cats.push(this.buildCat(cat))
        })

        return cats
    }

    buildCat(dbCat) {
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