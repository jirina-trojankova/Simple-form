import React from 'react'
import ReactDOM from 'react-dom'
import './ErrorBoundary'

class App extends React.Component {
  constructor() {
    super();
    this.state = {text: ''};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault()
    return(
      this.setState({
        text: '',
        myText: this.state.text
      }));
  }

  onChange(event) {
    return(
      this.setState({text: event.target.value.toUpperCase()})
    );
  }

  render() {
    return(
      <div>
        <Header myText={this.state.myText} />
        <form className="App" onSubmit={this.onSubmit}>
          <input type="text" value={this.state.text} onChange={this.onChange} />
          <input type="submit" value="I'm your headline.."/>
        </form>
      </div>
    );
  }
}


const Header = props => (
  <h1>Headline is: {props.myText}</h1>
)

ReactDOM.render (
  <App />,
  document.getElementById('root')
);