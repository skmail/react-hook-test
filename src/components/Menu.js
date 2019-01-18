import React, {useState} from 'react';

import MenuContext from './MenuContext'

const Menu = ({children}) => {

  const [selectedMenuItem,selectMenuItem] =  useState([]);

  return (
    <MenuContext.Provider value={{selectedMenuItem,selectMenuItem}}>
      <div className="w-64 bg-white border-r border-grey-lighter fixed pin-t pin-l h-screen">
        {children}
      </div>
    </MenuContext.Provider>
  )
}

export default Menu