import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./BookComponent";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onSearch = (element) => {
    this.setState({
      search: element.target.value,
    });
  };

  setBookType = (element) => {
    this.props.type(element);
  };

  render() {
    return (
      <>
        <div className="searchcontainer">
          <Link to="/" className="backbtn">
            &larr;
          </Link>
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={this.onSearch}
            className="searchBox"
          />
        </div>
        <div className="searchRes">
          <div className="searchCount">
            <span>
              {
                this.props.books.filter((book) => {
                  return book.title.toLowerCase().includes(this.state.search);
                }).length
              }
            </span> books found
          </div>
          <div className="bookSearchDislay">
            {this.props.books
              .filter((book) => {
                return book.title.toLowerCase().includes(this.state.search);
              })
              .map((book) => {
                return (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    img={book.img}
                    setBook={this.setBookType}
                  />
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
