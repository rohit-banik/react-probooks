import React, { Component } from "react";

export default class Book extends Component {
  selectType = (element) => {
    let stateobj;
    switch (element.target.value) {
      case "read":
        stateobj = { type: "read", id: this.props.id };
        break;
      case "like":
        stateobj = { type: "like", id: this.props.id };
        break;
      case "dislike":
        stateobj = { type: "dislike", id: this.props.id };
        break;
      case "del":
        stateobj = { type: "all", id: this.props.id };
        break;
      default:
        break;
    }
    this.props.setBook(stateobj);
  };

  render() {
    return (
      <div className="books">
        <div>
          <img src={this.props.img} alt="" />
          <select onChange={this.selectType}>
            <option value="non" selected hidden></option>
            <option value="read">Read &#128214;</option>
            <option value="like">Like &#128077;</option>
            <option value="dislike">Dislike &#128078;</option>
            <option value="del">Delete &#10060;</option>
          </select>
          <div className="arrow">&darr;</div>
        </div>
        <div className="title">{this.props.title}</div>
        <div className="author">{this.props.author}</div>
      </div>
    );
  }
}
