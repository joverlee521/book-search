import React, { Component } from 'react'
import API from '../utils/API';
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";

export default class Saved extends Component {
    state={
        books: []
    }

    componentWillMount(){
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getUserBooks()
        .then(res => {
            this.setState({ books: res.data })
        })
        .catch(err => console.log(err));
    }

    deleteBook = (book) => {
        API.deleteBook(book._id)
        .then(() => {
            this.props.openModal(`${book.title} has been removed from your saved books list!`);
            this.getSavedBooks();
        })
        .catch(err => console.log(err));
    }

    render() {
      return (
        <Container>
            <Jumbotron>
                <h1>React Google Saved Books</h1>
                <p className="lead">See a list of your saved books!</p>
            </Jumbotron>
            <Row>
                <Col size="12">
                    {this.state.books.length ? 
                    <List>
                        {this.state.books.map(book => {
                            const {_id, title, authors, description, image, link} = book;
                            return(<ListItem>
                                <button className="btn btn-danger m-2 text-white float-right"
                                onClick={() => this.deleteBook(book)}
                                >
                                  Remove
                                </button>
                                <a className="btn btn-primary m-2 text-white float-right" target="_blank" href={link}>View</a>
                                <h1>{title}</h1>
                                <h4>By: {authors.length > 1 ? authors.map((author, index) => ( (index ? ', ': '') + author )) : authors}</h4>
                                <Row classes="align-items-center">
                                  <Col size="lg-2 md-3 sm-6">
                                    <img className="m-3" src={image} alt={title}/>
                                  </Col>
                                  <Col size="lg-10 md-9 sm-6">
                                    <p className="my-3">{description}</p>
                                  </Col>
                                </Row>
                            </ListItem>);
                        })}
                    </List>
                    : <Container>
                        <h1 className="text-center">No Saved Books!</h1>
                        <p className="text-center">Go search for some books to add to the list!</p>
                    </Container>
                    }
                </Col>
            </Row>
        </Container>
      )
    }
}
