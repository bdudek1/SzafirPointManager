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
        return await this.db.litters.put(litter);
    }

    async deleteByName(name :string) {
        await this.db.transaction('rw', this.db.litters, async () => {
            const id = await this.getIdByName(name)
            await this.db.litters.delete(id)
        });
    }

    private async getIdByName(name :string) {
        this.getByName(name).then(object => {
            return object.id
        })
    }


}

export default DexieLittersRepository