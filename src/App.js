import React, { Component } from 'react'
import Lager from './containers/Lager'
import Wise from './containers/Wise'
import Ale from './containers/Ale'

class App extends Component {
  state = {
    lager: 0,
    wise: 0,
    ale: 0
  }

  componentDidMount() {
    setTimeout(() => this.setState({ wise: true }), 1000);
    setTimeout(() => this.setState({ lager: true }), 2000);
    setTimeout(() => this.setState({ ale: true }), 3000);
  }

  render() {
    const {
      lager,
      ale,
      wise
    } = this.state;

    return (
      <div className="App">
        <Lager completed={lager} />
        <Ale completed={ale} />
        <Wise completed={wise} />
      </div>
    );
  }
}

export default App;
