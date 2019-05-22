import React, { Component } from 'react'
import withDrink from './hoc'

const Larger = (props) => {

  return (
    <div>
      Total lupolo: {props.lupolo}
      Percentage: {props.percentage}
    </div>
  )
}

export default withDrink(Larger, { type: 'Larger' })