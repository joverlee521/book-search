import React from "react";
import { Row, Col } from "../Grid";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container my-5">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  const {title, authors, imageLinks, description, previewLink} = props.book;

  return <li className="list-group-item">
    <a className="btn btn-success m-2 text-white float-right" href="#">Save</a>
    <a className="btn btn-danger m-2 text-white float-right" target="_blank" href={previewLink}>View</a>
    <h1>{title}</h1>
    <h4>By: {authors.length > 1 ? authors.map((author, index) => ( (index ? ', ': '') + author )) : authors}</h4>
    <img className="float-left m-3" src={imageLinks.thumbnail} alt={title}/>
    <p>{description}</p>
  </li>;
}
