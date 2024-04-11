import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import BookList from '../../Components/BookList/BookList'
import Searchform from '../../Components/SearchForm/SearchForm'

const Search = () => {
  return (
    <main>
        <Navbar />
        <BookList />
    </main>
  )
}

export default Search