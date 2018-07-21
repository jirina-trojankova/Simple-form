import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor() {
    super();
    this.formHandler = this.formHandler.bind(this);
    this.state = {
      fromChild: ''
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
        <Headline passedValue={this.state.fromChild} />
        <Input propsHandler={this.formHandler} />
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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text"
               value={this.state.value}
               onChange={this.handleChange}/>
        <input type="submit" value="Sub"/>
      </form>
    );
  }
}

class Headline extends React.Component {
  render() {
    return(
      <h1>{this.props.passedValue}</h1>
    );
  }
}


ReactDOM.render(
  <Form />,
  document.getElementById('root')
);