import React from 'react'
import withDrink from '../hoc'

const recipe = {
  malte: '1,2kg',
  water: '18l',
  hops: '10g',
  maturation: '1100'
}

const Wise = (props) => {
  return (
    <div>
      <h1>Wise</h1>
      {props.children}
    </div>
  )
}

export default withDrink(Wise, recipe)