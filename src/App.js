import React from 'react';
import Menu from './components/Menu'
import MenuItem from './components/MenuItem'
import SubMenu from './components/SubMenu'

const App = () => {
  return (
    <div className="flex">

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

      <Menu data={[
        {
          title:"Movies",
          items : [
            {
              title: "Action"
            },
            {
              title: "Drama"
            },
            {
              title: "Adventure"
            },
            {
              title: "Animation"
            },
            {
              title: "Biography"
            },
            {
              title: "Mystery"
            },
            {
              title:"Crime",
            },
            {
              title:"Horror"
            },
            {
              title:"Releases",
              items:[
                {
                  title: 2019
                },
                {
                  title: 2018
                },
                {
                  title: 2017
                },
                {
                  title: 2016
                },
              ]
            }
          ]
        },
        {
          title: "TV - Series"
        },
        {
          title: "Top 10"
        },
        {
          title: "Concat us"
        }
      ]} />

    </div>
  )
}

export default App