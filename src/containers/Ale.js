import React from 'react'
import withDrink from '../hoc'

const recipe = {
  malte: '1kg',
  water: '14l',
  hops: '12g',
  maturation: '1500'
}

const Ale = (props) => {
  return (
    <div>
      <h1>Ale</h1>
      {props.children}
    </div>
  )
}

export default withDrink(Ale, recipe)