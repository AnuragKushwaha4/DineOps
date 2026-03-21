import React from 'react'
import Heading from './MenuComponents/Heading'
import MenuCategory from './MenuComponents/MenuCategory'

const Menu = () => {
  return (
    <div>
      {/* left and right div should be in ratio of 3:1 */}
      <div>
        <Heading/>
        <MenuCategory/>
      </div>
      <div>

      </div>

    </div>
  )
}

export default Menu
