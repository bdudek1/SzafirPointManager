interface CatsRepository {

    save(cat: object) :Promise<any>

    getByName(name: string) :Promise<any>

    getAll()  :Promise<any>

    update(cat: object) :Promise<any>

    deleteByName(name: string) :Promise<any>

}

export default CatsRepository