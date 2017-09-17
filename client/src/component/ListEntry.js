import React, {Component} from 'react';


class ListEntry extends Component {
  constructor() {
    super();
    this.state = {
      completed: false,
    };
    this.handleCompleted = this.handleCompleted.bind(this)
  }

handleCompleted() {
  this.setState({
    completed: !this.state.completed
  })
}

  render() {
    var style = {
      textDecoration: this.state.completed ? 'line-through' : 'none'
    };
    return (
      <div> 
        <label style = {style}>
        <input 
          type = "checkbox"
          defaultChecked={this.state.completed}
          ref="complete"
          onChange={this.handleCompleted}
        />{this.props.item.tasks}
        </label>
      </div> 
    )
  }
}

export default ListEntry;