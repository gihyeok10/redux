import React from 'react'
import {useSelector} from "react-redux";


const GrandSonBox = () => {
    let counter = useSelector((state) => state.counter)
  return (
    <div>GrandSonBox{counter}</div>
  )
}

export default GrandSonBox