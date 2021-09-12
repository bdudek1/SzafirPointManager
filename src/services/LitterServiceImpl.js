import LitterService from "./LitterService";

class LitterServiceImpl extends LitterService {
    litterRepo;

    constructor(litterRepo) {
        super()
        this.litterRepo = litterRepo
    }

    async getLitterByName(name) {
        const dbLitter =  await this.litterRepo.getByName(name)

        return this.buildLitter(dbLitter)
    }

    async saveLitter(litter) {
        return await this.litterRepo.save(litter)
    }

    async deleteLitterByName(name) {
        return await this.litterRepo.deleteByName(name)
    }

    async updateLitter(litter) {
        return await this.litterRepo.upate(litter)
    }

    async getAllLitters() {
        const dbLitters = await this.litterRepo.getAll()

        const litters = new Array()

        dbLitters.forEach(litter => {
            litters.push(this.buildLitter(litter))
        })

        return litters;
    }

    async getLittersBySearchQuery(query) {
        const dbLitters =  await this.litterRepo.getBySearchQuery(query)

        const litters = new Array()

        dbLitters.forEach(litter => {
            litters.push(this.buildLitter(litter))
        })

        return litters;
    }

    buildLitter(dbLitter) {
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