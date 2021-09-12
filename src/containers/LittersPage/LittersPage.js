import React, {useContext, useEffect} from 'react'

import SearchContext from '../../SearchContext'

const LittersPage = () => {
    const [searchString, setSearchString] = useContext(SearchContext)

    useEffect(() => {
        setSearchString('')
    }, [])
    
    return (
        <React.Fragment>
            <h2>Mioty</h2>
        </React.Fragment>
    )
}

export default LittersPage