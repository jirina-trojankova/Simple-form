import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ newItem: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      newItem: '',
      items: [this.state.newItem, ...this.state.items]
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.newItem} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <ItemsView items={this.state.items} />
      </div>
    );
  }
}

const ItemsView = props => (
  <div>
    {
      props.items.map((item, index) => <div key={index}>{item}</div>)
    }
  </div>
);

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);


