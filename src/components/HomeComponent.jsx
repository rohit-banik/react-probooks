import React, { Component } from "react";
import Book from "./BookComponent";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
    };
  }

  setBookType = (element) => {
    let id = this.state.books.findIndex((book) => book.id === element.id);
    let newBooks = this.state.books;
    newBooks[id].type = element.type;
    this.setState({
      books: [...newBooks],
    });
  };

  componentDidMount = () => {
    let bookobj = this.props.stateobj;
    if (bookobj.type !== "") {
      let id = this.state.books.findIndex((book) => book.id === bookobj.id);
      let newBooks = this.state.books;
      newBooks[id].type = bookobj.type;
      this.setState({
        books: [...newBooks],
      });
    }
  };

  render() {
    return (
      <>
        <div className="header">ProBook</div>
        <div className="container">
          <div className="heading">
            <span>Reading</span> (
            {
              this.state.books.filter((book) => {
                return book.type === "read";
              }).length
            }
            )
          </div>
          <div className="bookDislay">
            {this.state.books.filter((book) => {
              return book.type === "read";
            }).length === 0
              ? "No books reading"
              : this.state.books
                  .filter((book) => {
                    return book.type === "read";
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
          <div className="heading">
            <span>Like</span> (
            {
              this.state.books.filter((book) => {
                return book.type === "like";
              }).length
            }
            )
          </div>
          <div className="bookDislay">
            {this.state.books.filter((book) => {
              return book.type === "like";
            }).length === 0
              ? "No books liked"
              : this.state.books
                  .filter((book) => {
                    return book.type === "like";
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
          <div className="heading">
            <span>Dislike</span> (
            {
              this.state.books.filter((book) => {
                return book.type === "dislike";
              }).length
            }
            )
          </div>
          <div className="bookDislay">
            {this.state.books.filter((book) => {
              return book.type === "dislike";
            }).length === 0
              ? "No books disliked"
              : this.state.books
                  .filter((book) => {
                    return book.type === "dislike";
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
        <Link to="/search" className="searchBtn">+</Link>
      </>
    );
  }
}
