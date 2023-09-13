"use client";
import React, {useState} from "react";
import Book from "./Book";

const FlyweightPattern = () => {
  const books = new Map();
  const bookList = [];

  const createBook = (title, author, isbn) => {
    const existingBook = books.has(isbn);

    if (existingBook) {
      return books.get(isbn);
    }

    const book = new Book(title, author, isbn);
    books.set(isbn, book);

    return book;
  };

  const addBook = (title, author, isbn, availability, sales) => {
    const book = {
      ...createBook(title, author, isbn),
      sales,
      availability,
      isbn,
    };

    bookList.push(book);
    return book;
  };

  addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
    addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
    addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
    addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
    addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);


  return (
    <>
      <h2>Flyweight Pattern</h2>
      <ul className="my-2">
        <li>
          The flyweight pattern is a useful way to conserve memory when we're
          creating a large number of similar objects.
        </li>
        <li>
          Instead of creating a new class instance each time we add a copy, we
          can effectively use the already existing class instance for that
          particular copy.
        </li>
      </ul>
      <div className="my-2">
            <h5>Total amount of copies: {bookList.length}</h5>
            <h5>Total amount of books: {books.size}</h5>
      </div>
    </>
  );
};

export default FlyweightPattern;
