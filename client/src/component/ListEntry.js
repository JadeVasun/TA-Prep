import React, {Component} from 'react';
import axios from 'axios';

class ListEntry extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
      itemsDeleted: false
    };
    this.handleCompleted = this.handleCompleted.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
  }
  

handleCompleted(event) {
  this.setState({
    isChecked: event.target.checked
  })
}

clearCompleted(event) {
  let id = event.target.id
  //console.log('whats up', event.id);
  // console.log(id);
  axios.delete('http://localhost:1337/api/users/' + id)
    .then (() => {
      console.log('SUCCESSFUL DELETION')
      window.location.reload();
    })
    .catch (() => console.log('error error'))
}

  render() {
    //console.log(this.props.item);
    let style = {
      textDecoration: this.state.isChecked ? 'line-through' : 'none'
    };

    console.log('THIS IS', this.props.item);

    return (
      <div style = {style}> 
        <input 
          type = "checkbox"
          ref="complete"
          onChange={this.handleCompleted}
        />{this.props.item.tasks}
        <button id = {this.props.item.id} onClick = {this.clearCompleted}>DELETE</button>
      </div> 
    )
  }
}

export default ListEntry;