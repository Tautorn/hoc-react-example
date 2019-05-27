import React from 'react'
import Cup from './components/Cup'
import Loading from './loading.gif'

const withDrink = (WrapperComponent) => {

  const withDrink = (props) => {

    const isCompleted = props.completed

    return (
      <>
        {
          !isCompleted ? (
            <>
              <div style={{ display: "flex", flex: "1" }}>
                <img src={Loading} style={{ display: 'block', width: "328px", height: "278px", margin: '0 auto' }} />
              </div>
            </>
          ) : (
              <WrapperComponent {...props}>
                {<Cup isCompleted={isCompleted} />}
              </WrapperComponent>
            )
        }
      </>
    )
  }

  withDrink.defaultProps = {
    completed: false
  }

  return withDrink
}


export default withDrink