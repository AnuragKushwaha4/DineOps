import React, { useState } from 'react'
import Heading from './TableComponents/Headings'
import TablesStatus from "./TableComponents/TablesStatus"
const Tables = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
      <Heading  setCategory={setCategory}/>
      <TablesStatus category={category} />
    </div>
  )
}

export default Tables
