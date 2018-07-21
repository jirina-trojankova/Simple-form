import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
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
        return(
            <div>
                <Header passedValue={this.state.fromChild} />
                <Form handlerFromParent={this.handleData} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <h1>Hi! {this.props.passedValue}</h1>
        );
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
        this.props.handlerFromParent(this.state.value);
        this.setState({value: ''});
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
        console.log(this.state.value);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);