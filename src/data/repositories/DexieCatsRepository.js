import DexieDB from "../DexieDB";
import CatsRepository from "./CatsRepository";

class DexieCatsRepository extends CatsRepository {

    db = DexieDB.getDB()

    async save(cat) {
        return await this.db.cats.add(cat)
    }

    async getByName(name) {
        return await this.db.cats
                                .where("name")
                                .equalsIgnoreCase(name)
                                .first()
    }

    async getAll() {
        return await this.db.cats.toArray()
    }

    async update(cat) {
        return await this.db.cats.put(cat);
    }

    async deleteByName(name) {
        await this.db.transaction('rw', this.db.cats, async () => {
            const id = await this.getIdByName(name)
            await this.db.cats.delete(id)
        });
    }

    async getBySearchQuery(query) {
        await this.db.cats
                          .orderBy('name')
                          .filter(function (cat) {
                            return (
                                    cat.name.includes(query) ||
                                    cat.sex.includes(query) ||
                                    cat.availability.includes(query) ||
                                    cat.color.includes(query)
                                );
                           })
                           .toArray();
    }

    async getIdByName(name) {
        return await this.getByName(name).id
    }

}

export default DexieCatsRepository