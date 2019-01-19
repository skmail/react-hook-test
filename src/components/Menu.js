import React, {useState} from 'react';

import MenuContext from './MenuContext'
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";

const Menu = ({children, data = []}) => {


  const [selectedMenuItem,selectMenuItem] =  useState([]);

  return (
    <MenuContext.Provider value={{selectedMenuItem,selectMenuItem}}>
      <div className="w-64 bg-white border-r border-grey-lighter h-screen">
        {
          data.length > 0 &&
          data.map( item =>
            Array.isArray(item.items) && item.items.length > 0 ? <SubMenu key={item.key} {...item}/> : <MenuItem key={item.key} {...item}/>
          )
        }
        { data.length === 0 && children }
      </div>
    </MenuContext.Provider>
  )
}

export default Menu