import React, {useState} from 'react'
import NavBar from '../../components/NavBar'
import SimpleDrawer from '../../components/SimpleDrawer'

const Layout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <React.Fragment>
            <NavBar setIsDrawerOpen={setIsDrawerOpen}/>
            <SimpleDrawer isDrawerOpen={isDrawerOpen} 
                          setIsDrawerOpen={setIsDrawerOpen}/>   
        </React.Fragment>

    )
}

export default Layout