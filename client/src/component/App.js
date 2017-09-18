import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      term: '',
      items: [],
      completed: false
      //updated: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    console.log('fetching data');
    axios.get('http://localhost:1337/api/users')
      .then(results => {
        this.setState({items: results.data}, console.log('this is this.state.items: ', this.state.items));
      })
      .catch(err => console.log('error: ', err))
  }

  handleChange (event) {
    event.preventDefault();
    //console.log('THIS IS TERM', event.target.value);
    this.setState({term: event.target.value});
    
  }

  

  handleSubmit (event){
    // event.preventDefault();
    console.log('something');
    //make {todo match with req.body on controller}
   if (this.state.term.length > 0) {
      axios.post('http://localhost:1337/api/users', {todo: this.state.term})
        .then(data => {
          console.log(data)
          this.fetchData();
        })
        .catch(err => console.log('Error in post: ', err));
      }
    }
  
  render() {
    return (
      <div>
        <form className="App" onSubmit={(event) => this.handleSubmit(event)}>
          <input value={this.state.term} onChange={(event) => this.handleChange(event)} />
          <button type="submit">Submit</button>
        </form>
        <List items = {this.state.items} />
      </div>
    );
  }
}

export default App;