import React, { Fragment, useState } from 'react';
import './../App.css';
import initBooks from '../books.json';

const Basic = () => {

    const [booksRef] = useState(initBooks.books);

    const [books, setBooks] = useState(initBooks.books);

    const [query, setQuery] = useState('');

    const [queryCount, setQueryCount] = useState('');

    const searchQuery = (event) => {

        var currQuery = event.target.value;

        if (currQuery === '') {

            setBooks(booksRef);
            setQuery('');
            setQueryCount(0)
        } else {

            let filteredBooks = booksRef.filter(book => book.title.toLowerCase().includes(currQuery) || book.author.toLowerCase().includes(currQuery) || book.published.toString().toLowerCase().includes(currQuery) || book.publisher.toLowerCase().includes(currQuery))

            setBooks(filteredBooks);
            setQuery(currQuery);
            setQueryCount(filteredBooks.length);
        }
    }

    return (
        <Fragment>

            <div className="book__search_container container app_title">
                Book Application
            </div>

            <div className="book__search_container">

                <div className="book_serach">
                    <input type="text" className="search_box" onChange={(e) => {
                        searchQuery(e);
                    }} />
                </div>

            </div>

            <div className="book__search_container search_result">
                Showing {queryCount} searches for {query}

            </div>

            <div className="boo_app_container">
                <div className="book__container">

                    <div className="book_isbn header">
                        Title
                </div>
                    <div className="book_author header">
                        Author
                </div>
                    <div className="book_published header">
                        Published
                </div>
                    <div className="book_publisher header">
                        Publisher
                </div>
                    <div className="book_website header">
                        Website
                </div>
                </div>
                {
                    books.length === 0 && (
                        <div>
                            No books found
                        </div>
                    )
                }
                {
                    books && books.length && (
                        <div>
                            {
                                books.map((book, index) => (
                                    <div key={`book_container_${index}`} className="book__container">

                                        <div key={`isbn_${index}`} className="book_isbn">
                                            {book.title}
                                        </div>
                                        <div key={`author_${index}`} className="book_author">
                                            {book.author}
                                        </div>
                                        <div key={`published_${index}`} className="book_published">
                                            {book.published}
                                        </div>
                                        <div key={`publisher_${index}`} className="book_publisher">
                                            {book.publisher}
                                        </div>
                                        <div key={`website_${index}`} className="book_website">
                                            <a href={book.website} target="_blank">Link</a>

                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    )
                }
            </div>
        </Fragment>
    )

}

export default Basic;