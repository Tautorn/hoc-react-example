import React, { Component } from 'react'
import withDrink from '../hoc'

const recipe = {
  malte: '1kg',
  water: '16l',
  hops: '10g',
  maturation: '1000'
}

const Larger = (props) => {
  console.log('pora', props)
  return (
    <div>
      Percentage: {props.boiler}
    </div>
  )
}

export default withDrink(Larger, recipe)