import React, { Component } from 'react'
import withDrink from '../hoc'
import Cup from '../components/Cup'

const recipe = {
  malte: '1kg',
  water: '16l',
  hops: '10g',
  maturation: '1000'
}

const Wise = (props) => {
  console.log('pora', props)
  return (
    <div>
      Percentage: {props.boiler}
    </div>
  )
}

export default withDrink(Wise, recipe)