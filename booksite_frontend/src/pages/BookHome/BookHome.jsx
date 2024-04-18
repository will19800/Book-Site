import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useGlobalContext } from '../../context'
import BookDetails from '../../Components/BookDetails/BookDetails'

const BookHome = (book) => {
    const {books} = useGlobalContext();

  return (
    <main>
        <BookDetails />
    </main>
  )
}

export default BookHome