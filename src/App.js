import React, { Component } from "react";
import Home from "./components/HomeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/SearchComponent";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      obj: { type: "", id: "" },
    };
  }

  componentDidMount = () => {
    let api = "https://reactnd-books-api.udacity.com/books";
    let token = '1234'
    const headers = {
      Accept: "application/json",
      Authorization: token,
    };
    axios
      .get(api, { headers })
      .then((res) => {
        let newBooks = [];
        res.data.books.forEach((element) => {
          let book = {
            id: element.id,
            title: element.title,
            author: element.authors[0],
            img: element.imageLinks.thumbnail,
            type: "all",
          };
          newBooks.push(book);
        });
        this.setState({
          books: [...newBooks],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setBookSearch = (e) => {
    let newBookObj = this.state.obj;
    newBookObj.type = e.type;
    newBookObj.id = e.id;
    this.setState({
      obj: newBookObj,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home books={this.state.books} stateobj={this.state.obj} />} />
            <Route path="/search" element={<Search books={this.state.books} type={this.setBookSearch} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
