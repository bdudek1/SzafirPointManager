import React, {useContext} from 'react'

import SearchContext from '../../SearchContext'

const HomePage = () => {
    const [searchString, setSearchString] = useContext(SearchContext)
    
    return (
        <React.Fragment>
            <h2>Strona główna</h2>
        </React.Fragment>
    )
}

export default HomePage
