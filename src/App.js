import React, { Component } from 'react'
import Lager from './containers/Lager'
import Wise from './containers/Wise'
import Ale from './containers/Ale'

class App extends Component {
  state = {
    lager: false,
    wise: false,
    ale: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({ wise: true }), 2000);
    setTimeout(() => this.setState({ lager: true }), 4000);
    setTimeout(() => this.setState({ ale: true }), 1000);
  }

  render() {
    const {
      lager,
      ale,
      wise
    } = this.state;

    return (
      <div className="App" style={{ display: "flex", flex: "1", justifyContent: "space-between" }}>
        <Lager completed={lager} type="lager" />
        <Ale completed={ale} />
        <Wise completed={wise} />
      </div>
    );
  }
}

export default App;
