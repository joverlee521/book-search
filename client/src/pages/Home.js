import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";

export default class Home extends Component {
    state = {
        bookInput: "",
        bookSearched: "",
        books: [],
        savedBooks: []
    }

    handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      if(this.state.bookInput){
        this.setState({bookSearched: this.state.bookInput});
        API.getBooks(this.state.bookInput)
        .then(res => {
          this.setState({ books: res.data });
        })
        .catch(err => console.log(err));
      }
    };

    saveBook = book => {
        API.saveBook(book).then((res)=> this.props.openModal(`"${res.data.title}" has been added to saved list!`))
        .catch(err => console.log(err));
    }

    render() {
      return (
        <Container>
          <Jumbotron>
                {this.state.books.length ? 
                <div>
                    <h1>Search Results For:</h1>
                    <h2>"{this.state.bookSearched}"</h2>
                </div>
                :
                <div>
                    <h1>Welcome to React Google Books!</h1>
                    <hr/>
                    <p className="lead">Search and Save Books of Interest!</p>
                </div>
                }
          </Jumbotron>
          <Row>
              <Col size="md-12">
                  <form className="my-3">
                      <Row>
                            <Col size="md-12">
                                <Input 
                                    value={this.state.bookInput}
                                    name="bookInput"
                                    placeholder="Search for a book"
                                    onChange={this.handleInputChange}
                                />
                            </Col>
                      </Row>
                      <Row classes="justify-content-end">
                            <Col size="md-2">
                                <FormBtn
                                    onClick={this.handleFormSubmit}
                                >
                                    Search
                                </FormBtn>
                            </Col>
                      </Row>
                  </form>
              </Col>
          </Row>
          <Row>
              <Col size="md-12">
                {this.state.books.length ? 
                <List>
                    {this.state.books.map(book => {
                        const {title, authors, description, imageLinks, previewLink} = book.volumeInfo;
                        return(<ListItem>
                            <button className="btn btn-success m-2 text-white float-right" 
                            onClick={() => this.saveBook({title, authors, image: imageLinks.thumbnail, description, link: previewLink})}>
                              Save
                            </button>
                            <a className="btn btn-primary m-2 text-white float-right" target="_blank" href={previewLink}>View</a>
                            <h1>{title}</h1>
                            {authors ? 
                            <h4>By: {authors.length > 1 ? authors.map((author, index) => ( (index ? ', ': '') + author )) : authors}</h4>
                            : <h4>No Listed Authors</h4>}
                            <Row classes="align-items-center">
                              <Col size="lg-2 md-3 sm-6">
                                <img className="m-3" src={imageLinks.thumbnail} alt={title}/>
                              </Col>
                              <Col size="lg-10 md-9 sm-6">
                                <p className="my-3">{description ? description : "No description found"}</p>
                              </Col>
                            </Row>
                        </ListItem>)
                    }
                    )}
                </List>
                : <h1 className="text-center">No Book Results</h1>}
              </Col>
          </Row>
        </Container>
      )
    }
}
