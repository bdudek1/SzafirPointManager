interface LittersRepository {

    save(cat: object) :Promise<any>

    getByName(name: string) :Promise<any>

    getAll()  :Promise<any>

    update(cat: object) :Promise<any>

    delete(id :number) :Promise<any>

}

export default LittersRepository