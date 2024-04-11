import React from 'react'
import { Link } from 'react-router-dom'
import './BookList.css'

const Book = (book) => {

  return (
    <div className='my-5 p-2 bg-darkwhite text-grey rounded-xl'>
      <div className='flex'>
        <Link to={`/search/book/${book.id}`} {...book}>
          <img className="Book p-1" src={book.cover_id} alt = 'book cover' />
        </Link>
        <div className='p-5'>
          <Link to={`/search/book/${book.id}`} {...book}>
            <h2 className='text-2xl hover:text-lightblue font-bold mb-2'>{book.title}</h2>
          </Link>
          <p className='text-xl mb-1'> by {book.author}</p>
          <p className='text-m'> {book.ratings_average} -- {book.ratings_count} ratings -- published {book.first_publish_year}</p>
        </div>
      </div>
    </div>
  )
}

export default Book

      {/* </div>
      {/* <div className='info'>
        <Link to = {`book/${book.id}`} {...book}>
          <div>
            <p>{book.title}</p>
          </div>
        </Link>
        <div className='author-title'>
          <p>{book.author}</p>
        </div> */} 