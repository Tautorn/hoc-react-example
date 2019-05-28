import React from 'react'
import withDrink from '../hoc'

const recipe = {
  malte: '1kg',
  water: '16l',
  hops: '10g',
  maturation: '1000'
}

const Larger = (props) => {
  return (
    <div>
      <h1>Lager</h1>
      {props.children}
    </div>
  )
}

export default withDrink(Larger, recipe)