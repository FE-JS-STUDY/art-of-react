import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    SplitMe: null,
  };
  handleClick = async () => {
    const loadedModule = await import("./SplitMe");
    this.setState({
      SplitMe: loadedModule.default,
    });
  };
  render() {
    const { SplitMe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>Hello React!</p>
          {/* state에 있는 SplitMe가 유효하면 SplitMe 컴포넌트 렌더링 */}
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}

export default App;
