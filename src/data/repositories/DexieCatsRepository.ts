import DexieDB from "../DexieDB";
import CatsRepository from "./CatsRepository";

class DexieCatsRepository implements CatsRepository {

    db = DexieDB.getDB() as any

    async save(cat: object) {
        return await this.db.cats.add(cat)
    }

    async getByName(name :string) {
        return await this.db.cats
                                .where("name")
                                .equalsIgnoreCase(name)
                                .first()
    }

    async getAll() {
        return await this.db.cats.toArray()
    }

    async update(cat :object) {
        return await this.db.cats.update(cat);
    }

    async delete(id :number) {
        return await this.db.cats.delete(id)
    }

    private async getIdByName(name :string) {
        this.getByName(name).then(object => {
            console.log(object)
            console.log(object.id)
            return object.id
        })
    }

}

export default DexieCatsRepository