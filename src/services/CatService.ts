interface CatService {

    getCatByName(name: string) :Promise<any>

    saveCat(cat: object) :Promise<any>

    deleteCat(name :string) :Promise<any>

    updateCat(cat :object) :Promise<any>

    getAllCats() :Promise<Array<any>>

    getCatsBySearchQuery(query :string) :Promise<Array<any>>
    
}

export default CatService