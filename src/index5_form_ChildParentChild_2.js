import React from 'react'
import ReactDOM from 'react-dom'
import './ErrorBoundary'

class App extends React.Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: ''
    };
  }

  handleData(data) {
    this.setState({
      fromChild: data
    });
  }

  render() {
    return (
      <div>
        <FirstChild handlerFromParent={this.handleData} />
        <OtherChild passedVal={this.state.fromChild} />
      </div>
    );
  }
}

class FirstChild extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputField: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.handlerFromParent(this.state.inputField);
    this.setState({inputField: ''});
  }

  handleChange(event) {
    this.setState({inputField: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 value={this.state.inputField}
                 onChange={this.handleChange} />
          <input type="submit" value="Click me" />
        </form>
        <h5>Visible in first child:<br />{this.state.inputField}</h5>
      </div>
    );
  }
}

class OtherChild extends React.Component {
  render() {
    return (
      <h1>
        Value in OtherChild Props: {this.props.passedVal}
      </h1>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);