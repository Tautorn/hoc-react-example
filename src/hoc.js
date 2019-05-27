import React, { useEffect, useState } from 'react'
import Cup from './components/Cup'

const LIMIT_BOILER = 10000

const DrinkHOC = (WrapperComponent, recipe) => {

  const DrinkHOC = (props) => {

    // const isCompleted = props.completed

    const isCompleted = false


    return (
      <>
        {
          !isCompleted ? (
            <>
              Fabricando cerveja
              {<Cup />}
            </>
          ) : (
              <WrapperComponent {...props} />
            )
        }
      </>
    )
  }
  return DrinkHOC
}

export default DrinkHOC