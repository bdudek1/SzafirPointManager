import React, {useContext} from 'react'

import SearchContext from '../../SearchContext'

const LittersPage = () => {
    const [searchString, setSearchString] = useContext(SearchContext)

    return (
        <React.Fragment>
            <h2>Mioty</h2>
        </React.Fragment>
    )
}

export default LittersPage