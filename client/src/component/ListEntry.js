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
      padding: "10px",
      paddingLeft: "10px",
      marginRight:"1000px",
      width: "400px",
      margin: "10px",
      border: "2px solid gray",
      background: "#C0C0C0",
      height: "45px",
      position: "relative",
      lineHeight: "36px",
      textAling: "center"
    };

    let buttonStyle = {
      float: "right",
      postion: "fixed",
      lineHeight: "1px",
      top: "40%",
      marginTop: "35px",
      marginRight:"-5px"
    
    }

    let textStyle = {
      textDecoration: this.state.isChecked ? 'line-through' : 'none',
      
      paddingLeft: "20px",
      paddingTop: "-50px"
    }

    let inputStyle = {
      marginTop: "10px"
    }
    

    

    console.log('THIS IS', this.props.item);

    return (
      <div style = {style}> 
        <input 
          style = {inputStyle}
          type = "checkbox"
          ref="complete"
          onChange={this.handleCompleted}
        /><label style = {textStyle}>{this.props.item.tasks} </label>
        <button style = {buttonStyle} id = {this.props.item.id} onClick = {this.clearCompleted}>DELETE</button>
      </div> 
    )
  }
}

export default ListEntry;