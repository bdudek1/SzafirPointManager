import React, {useContext, useEffect, useState} from 'react'

import SearchContext from '../../SearchContext'

import CatDTOBuilder from '../../data/dto/CatDTOBuilder'
import DexieCatsRepository from '../../data/repositories/DexieCatsRepository'
import CatServiceImpl from '../../services/CatServiceImpl'

const CatsPage = () => {
    const [searchString, setSearchString] = useContext(SearchContext)
    const [catService] = useState(new CatServiceImpl(new DexieCatsRepository()))

    useEffect(() => {
        setSearchString('')
        // const cat = new CatDTOBuilder()
        //                                .setName("name")
        //                                .setSex("sex")
        //                                .setColor("color")
        //                                .setAvailability("available")
        //                                .setPhoto(null)
        //                                .build()
        // catsRepo.save(cat)

        //catsRepo.deleteByName("name")

        catService.getAllCats().then(result => {
            console.log(result)
        })
        //console.log(catsRepo.getByName("name"))
    }, [])

    useEffect(() => {
        console.log(searchString)
        
        // catsRepo.getBySearchQuery(searchString).then(result => {
        //     console.log(result)
        // })
    }, [searchString])
    
    return (
        <React.Fragment>
            <h2>Koty</h2>
        </React.Fragment>
    )
}

export default CatsPage
