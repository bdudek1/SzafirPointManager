interface LitterService {

    getLitterByName(name: string) :Promise<any>

    saveLitter(litter: object) :Promise<any>

    deleteLitter(name :string) :Promise<any>

    updateLitter(litter :object) :Promise<any>

    getAllLitters() :Promise<Array<any>>

    getLittersBySearchQuery(query :string) :Promise<Array<any>>
    
}

export default LitterService