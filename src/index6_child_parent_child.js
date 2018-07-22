import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor() {
    super();
    this.formHandler = this.formHandler.bind(this);
    this.state = {
      fromChild: '',
      items: []
    };
  }

  formHandler(data) {
    this.setState({
      fromChild: data
    });
  }


  render() {
    return(
      <div>
        <Input propsHandler={this.formHandler} />
        <Items passedValue={this.state.fromChild} />
      </div>
    );
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.propsHandler(this.state.value);
    this.setState({value: ''});

  }

  render() {
    return(
      <form>
        <label htmlFor="name">Name</label>
        <input type="text"
               value={this.state.value}
               onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

class Items extends React.Component {
  render() {
    return(
      <div>{this.props.passedValue}</div>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);