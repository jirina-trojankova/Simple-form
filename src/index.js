import React from 'react'
import ReactDOM from 'react-dom'
import './ErrorBoundary'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    return(
      this.setState({text: event.target.value})
    );
  }

  handleSubmit(event) {
    event.preventDefault()
    return(
      this.setState({
        text: '',
        items: [this.state.text, ...this.state.items]
      }));
  }

  render() {
    return(
      <div>
        <form>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}


const List = props => (
  <div>
    {
      props.items.map((item, index) => <div key={index}>{item}</div>)
    }
  </div>
);

ReactDOM.render (
  <Form />,
  document.getElementById('root')
);