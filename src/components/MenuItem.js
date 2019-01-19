import React, {useState, useContext} from 'react';
import uuid from 'uuid'

import MenuContext from './MenuContext'

const MenuItem = ({children, id, title}) => {

  const [menuId] = useState(function(){
    return id || uuid.v4()
  });

  const {selectedMenuItem, selectMenuItem} = useContext(MenuContext)

  const onClick = () => selectMenuItem([menuId])

  const defaultClass = 'py-3 px-4 cursor-pointer my-2 mx-4 rounded-lg';
  const activeClass = 'bg-blue text-white';
  const inactiveClass = 'hover:bg-grey-lighter';

  const className = selectedMenuItem.indexOf(menuId) !== -1 ?activeClass:inactiveClass

  return (
    <div className={`${defaultClass} ${className}`} onClick={onClick}>
      {
        typeof title !== "undefined" && title
      }
      {children}
    </div>
  )
}

export default MenuItem