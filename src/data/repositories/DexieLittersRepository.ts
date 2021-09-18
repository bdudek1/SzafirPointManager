import DexieDB from "../DexieDB";
import LittersRepository from "./LittersRepository";

class DexieLittersRepository implements LittersRepository {

    db = DexieDB.getDB() as any

    async save(litter: object) {
        return await this.db.litters.add(litter)
    }

    async getByName(name :string) {
        return await this.db.litters
                                .where("name")
                                .equalsIgnoreCase(name)
                                .first()
    }

    async getAll() {
        return await this.db.litters.toArray()
    }

    async update(litter :object) {
        return await this.db.litters.update(litter);
    }

    async delete(id :number) {
        return await this.db.litters.delete(id)
    }

    private async getIdByName(name :string) {
        this.getByName(name).then(object => {
            return object.id
        })
    }


}

export default DexieLittersRepository