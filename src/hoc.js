import React, { Component } from 'react'

const DrinkHOC = (WrapperComponent, { type }) => {

  return class extends Component {

    constructor(props) {
      super(props)
      this.state = {
        percentage: 0
      }
    }

    componentDidMount() {
      // const { percentage } = this.props

      global.setInterval(() => {
        this.setState({
          percentage: 20 + this.state.percentage
        })
      }, 2000)
    }

    componentShouldUpdated() {

    }

    getLupolo(type) {
      return {
        Wise: '15',
        Pilsen: '20',
        Larger: '10',
      }[type]
    }

    render() {
      // const { type } = this.props

      console.log('props', this.props)
      console.log('type', type)

      const lupolo = this.getLupolo(type)

      return (
        <>
          <WrapperComponent {...this.props} lupolo={lupolo} percentage={this.state.percentage} />
        </>
      )
    }
  }
}

export default DrinkHOC