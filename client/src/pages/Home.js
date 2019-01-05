import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";

export default class Home extends Component {
    state = {
        bookSearched: "",
        books: []
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
      if(this.state.bookSearched){
        API.getBooks(this.state.bookSearched)
        .then(res => {
          this.setState({ books: res.data });
        })
        .catch(err => console.log(err));
      }
    };

    render() {
      return (
        <Container>
          <Jumbotron>
              <h1>Welcome to React Google Books!</h1>
          </Jumbotron>
          <Row>
              <Col size="md-12">
                  <form className="my-3">
                      <Row>
                            <Col size="md-10 sm-12">
                                <Input 
                                    value={this.state.book}
                                    name="bookSearched"
                                    placeholder="Search for a book"
                                    onChange={this.handleInputChange}
                                />
                            </Col>
                            <Col size="md-2 sm-12">
                                <FormBtn
                                    onClick={this.handleFormSubmit}
                                >
                                    Search Book
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
                    <h1 class="my-5 text-center">"{this.state.bookSearched}" Search Results</h1>
                    {this.state.books.map(book => <ListItem book={book.volumeInfo}/>)}
                </List>
                : <h1 className="text-center">No Book Results</h1>}
              </Col>
          </Row>
        </Container>
      )
    }
}
