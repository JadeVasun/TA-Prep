import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: [],
      updated: false,
    };
  }
  
  // handleChange (event) {
  //   this.setState({term: event.target.value});
  // }
  
  handleSubmit (event){
    event.preventDefault();

    let text = document.getElementById('task');
    
    var context = this;
    //make {todo match with req.body on controller}
    axios.post('http://localhost:1337/api/users', {todo: text.value})
    .then(data => {
      context.setState ({
        updated: false,
        // term: '',
        // items: [...this.state.items, this.state.term]
        //console.log(data)
      })
      text.value = '';
    })
    .catch(err => console.log('Error in post: ', err));
  }
  
  handleUpdates () {
    axios.get('http://localhost:1337/api/users')
      .then(results => {
        this.setState({items: results.data, updated: true}, console.log('this is this.state.items: ', this.state.items));
      })
      .catch(err => console.log('error: ', err))
  }
  
  render() {
    if (!this.state.updated) {
      this.handleUpdates();
    }

      return (
        <div>
          <form className="App">
            <input id="task" type="text" />
            <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
          </form>
          <List items={this.state.items} />
        </div>
      );
    }
}

export default App;