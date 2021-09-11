import React, {useContext} from 'react'

import SearchContext from '../../SearchContext'

const OffersPage = () => {
    const [searchString, setSearchString] = useContext(SearchContext)

    return (
        <React.Fragment>
            <h2>Oferty</h2>
        </React.Fragment>
    )
}

export default OffersPage
