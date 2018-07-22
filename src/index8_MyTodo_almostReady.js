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
      fromChild: data,
      items: [this.state.data, ...this.state.items]
    });
  }


  render() {
    return(
      <div>
        <Input propsHandler={this.formHandler} />
        <Items passedItems={this.state.items} />
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
        <label>Name</label>
        <input type="text"
               value={this.state.value}
               onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

const Items = props  => (
  <div>
    {props.passedItems.map((item, index) => <div key={index}>{item}</div>)}
  </div>
);

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);