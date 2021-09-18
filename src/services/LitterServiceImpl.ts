import LitterService from "./LitterService";
import LitterDTOBuilder from "../data/dto/LitterDTOBuilder";

class LitterServiceImpl implements LitterService {
    litterRepo;

    constructor(litterRepo :any) {
        this.litterRepo = litterRepo
    }

    async getLitterByName(name :string) {
        const dbLitter =  await this.litterRepo.getByName(name)

        return this.buildLitter(dbLitter)
    }

    async saveLitter(litter :object) {
        return await this.litterRepo.save(litter)
    }

    async deleteLitter(name :string) {
        return await this.litterRepo.deleteByName(name)
    }

    async updateLitter(litter :object) {
        return await this.litterRepo.upate(litter)
    }

    async getAllLitters() {
        const dbLitters = await this.litterRepo.getAll()

        const litters = new Array()

        dbLitters.forEach((litter :any) => {
            litters.push(this.buildLitter(litter))
        })

        return litters;
    }

    async getLittersBySearchQuery(query :string) {
        const dbLitters =  await this.litterRepo.getBySearchQuery(query)

        const litters = new Array()

        dbLitters.forEach((litter :any) => {
            litters.push(this.buildLitter(litter))
        })

        return litters;
    }

    buildLitter(dbLitter :any) {
        const litter = new LitterDTOBuilder()
                                            .setName(dbLitter.name)
                                            .setBirthDate(dbLitter.birthDate)
                                            .setRace(dbLitter.race)
                                            .setMother(dbLitter.mother)
                                            .setFather(dbLitter.father)
                                            .setKittens(dbLitter.kittens)
                                            .setPhoto(dbLitter.photo)
                                            .setGalleryLink(dbLitter.galleryLink)
                                            .build()

        return litter
    }
}

export default LitterServiceImpl