interface LitterService {

    getLitterByName(name: string) :Promise<any>

    saveLitter(litter: object) :Promise<any>

    deleteLitter(id :number) :Promise<any>

    updateLitter(litter :object) :Promise<any>

    getAllLitters() :Promise<Array<any>>
    
}

export default LitterService