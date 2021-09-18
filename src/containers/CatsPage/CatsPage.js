import React, {useContext, useEffect, useState} from 'react'

import SearchContext from '../../SearchContext'

import CatsTable from './CatsTable'

const CatsPage = () => {
    const [searchString, setSearchString] = useContext(SearchContext)
    //const [addCatFormOpen, setAddCatFormOpen] = useState(false)
    //const [catService] = useState(new CatServiceImpl(new DexieCatsRepository()))

    useEffect(() => {
        setSearchString('')
        // const cat = new CatDTOBuilder()
        //                                .setName("name6")
        //                                .setSex("sex3")
        //                                .setColor("color3")
        //                                .setAvailability(Availability.Reserved)
        //                                .setPhoto(null)
        //                                .build()
        // catService.saveCat(cat)

        //catService.deleteCat("name2")

        // catService.getAllCats().then(result => {
        //     console.log(result)
        // })

        // catService.getCatByName("name2").then(result => {
        //     console.log(result)
        // })
        //console.log(catsRepo.getByName("name"))
    }, [])

    useEffect(() => {
        console.log(searchString)
        
    }, [searchString])
    
    return (
        <React.Fragment>
            <h2>Koty</h2>
            <CatsTable searchString={searchString}/>
        </React.Fragment>
    )
}

export default CatsPage
