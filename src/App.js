import React from 'react';
import Menu from './components/Menu'
import MenuItem from './components/MenuItem'
import SubMenu from './components/SubMenu'

const App = () => {
  return (
    <div>
      <Menu>
        <SubMenu title="Movies">
          <MenuItem>Action</MenuItem>
          <MenuItem>Drama</MenuItem>
          <MenuItem>Adventure</MenuItem>
          <MenuItem>Animation</MenuItem>
          <MenuItem>Biography</MenuItem>
          <MenuItem>Mystery</MenuItem>
          <MenuItem>Crime</MenuItem>
          <MenuItem>Horror</MenuItem>
          <SubMenu title='Releases'>
            <MenuItem>2019</MenuItem>
            <MenuItem>2018</MenuItem>
            <MenuItem>2017</MenuItem>
            <MenuItem>2016</MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem>TV - Series</MenuItem>
        <MenuItem>Top 10</MenuItem>
        <MenuItem>Contact us</MenuItem>
      </Menu>
    </div>
  )
}

export default App