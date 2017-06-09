import React, {Component} from "react";

export default class SimpleComponent extends Component {
  constructor(){
    super();
    this.state = {
      mood: "happy"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    this.setState({
      mood: this.state.mood === "happy" ? "sad" : "happy"
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}
