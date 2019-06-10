import React from 'react'
import Cup from './components/Cup'
import Loading from './loading.gif'

const withDrink = (WrapperComponent, recipe) => {

  const ComponentEnhanced = (props) => {

    const isCompleted = props.completed

    return (
      <>
        {
          !isCompleted ? (
            <div style={{ display: "flex", flex: "1" }}>
              <h1>Receita:</h1>
              <div>
                <p><label>Malte:</label>{recipe.malte}</p>
                <p><label>Water:</label>{recipe.water}</p>
                <p><label>Hops:</label>{recipe.hops}</p>
                <p><label>Maturation:</label>{recipe.maturaion}</p>
              </div>
              <img src={Loading} style={{ display: 'block', width: "328px", height: "278px", margin: '0 auto' }} />
            </div>
          ) : (
              <WrapperComponent {...props}>
                {<Cup isCompleted={isCompleted} />}
              </WrapperComponent>
            )
        }
      </>
    )
  }

  ComponentEnhanced.defaultProps = {
    completed: false
  }

  return ComponentEnhanced
}


export default withDrink