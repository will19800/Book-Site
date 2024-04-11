import React from 'react'
import { useGlobalContext } from '../../context'
import Loading from '../Loader/Loader'
import './BookList.css'
import Searchform2 from '../SearchForm2/SearchForm2'
import Book from './Book'

const Booklist = () => {
  const {books, loading} = useGlobalContext();


  if (loading) return <Loading />;

  return (
    <section>
      <div className='container'>
        <div className='flex flex-col'>
          <h1 className='mt-4 text-3xl font-radiocanada font-bold'>Search</h1>
          <div className='mt-5 mb-2 w-11/12 bg-darkwhite rounded-lg p-4 pb-8'>
            <Searchform2 />
          </div>
            <div className='section-title'>
              <div className=''>
                {books.slice(0, 30).map((item, index) => {
                  return (
                    <Book key={index} {...item} />
                  )
                })}
              </div>
            </div>
          </div>
      </div>
    </section>

  );
}



export default Booklist;