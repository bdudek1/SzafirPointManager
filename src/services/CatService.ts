interface CatService {

    getCatByName(name: string) :Promise<any>

    saveCat(cat: object) :Promise<any>

    deleteCat(id :number) :Promise<any>

    updateCat(cat :object) :Promise<any>

    getAllCats() :Promise<Array<any>>
    
}

export default CatService