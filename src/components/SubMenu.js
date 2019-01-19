import React, {useState, useContext} from 'react';

import uuid from 'uuid'
import MenuItem from './MenuItem'
import MenuContext from './MenuContext'

const SubMenu = ({children, title, id, items = []}) => {

  const [menuId] = useState(function () {
    return id || uuid.v4()
  });

  const {selectedMenuItem, selectMenuItem} = useContext(MenuContext)

  const select = (menu) => {
    selectMenuItem([
      menuId,
      ...menu
    ])
  };

  const isSelected = selectedMenuItem.indexOf(menuId) !== -1;

  return (
    <MenuContext.Provider value={{selectedMenuItem, selectMenuItem: select}}>
      <MenuItem id={menuId}>
        <div className="flex items-center">
          <span className="flex-1">
            {title}
          </span>
          <svg className={`w-3 h-3 mr-2`} style={{
            transform: isSelected === false ? 'scale(1)' : 'scaleY(-1)'
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
            <path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"/>
          </svg>
        </div>
      </MenuItem>
      {
        isSelected === true &&
        <div  className="ml-2">

          {
            items.length > 0 &&
            items.map( item =>
              Array.isArray(item.items) && item.items.length > 0 ? <SubMenu key={item.key} {...item}/> : <MenuItem key={item.key} {...item}/>
            )
          }

          { items.length === 0 && children }

        </div>
      }
    </MenuContext.Provider>
  )
}

export default SubMenu
