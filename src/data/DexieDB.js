import Dexie from 'dexie';

const db = new Dexie("SzafirPoint")

db.version(1).stores(
    { 
      litters: "++id, &name, birthDate, race, mother, father, *kittens, photo, galleryLink",
      cats: "++id, &name, sex, color, availability, photo"
    }
  )

class DexieDB {

    static getDB() {
        return db;
    }

}

export default DexieDB