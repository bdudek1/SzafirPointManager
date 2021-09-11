import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'

import Drawer from '@material-ui/core/Drawer';


const SimpleDrawer = ({isDrawerOpen, setIsDrawerOpen}) => {

  return (
    <div>
        <React.Fragment>
          <Drawer anchor={'left'}
                  open={isDrawerOpen} 
                  onClose={() => setIsDrawerOpen(false)}>
            <Link to="/"><div className="drawer-link">Strona główna</div></Link>
            <Link to="/offers"><div className="drawer-link">Oferty</div></Link>
            <Link to="/litters"><div className="drawer-link">Mioty</div></Link>
            <Link to="/cats"><div className="drawer-link">Koty</div></Link>
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default SimpleDrawer