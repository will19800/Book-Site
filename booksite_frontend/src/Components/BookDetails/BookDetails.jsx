import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import { useState } from "react";
import "./BookDetails.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import StarRating from '../../Components/StarRating/StarRating'
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/regular.css';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { books } = useGlobalContext();
  const [bookInfo, setBookInfo] = useState("");
  const { id } = useParams();
  const book = books.find((book) => book.id === id);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const { description, subjects} = data;
          const newBookInfo = {
            description: description.value ? description.value : "No description found.",
            subjects: subjects ? subjects.join(" ") : "No genres found."
          };
          setBookInfo(newBookInfo);
        } else {
          setBookInfo("");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookDetails();
  }, [id]);

  if (!book) {
    return console.error()
  }


  return (
    <section>
      <Navbar />
      <div className="container-book-details font-radiocanada">
        <div className="flex">
          <div className="left-column fixed top-28 flex flex-col">
            <img
              src={book.cover_id}
              alt="book cover"
              className="book-details mx-auto"
            />
            <button className="justify-center mb-8 mt-8 rounded-3xl bg-lightblue shadow-lg p-2 w-72">
              Want to read
            </button>
            <button className="justify-center rounded-3xl outline shadow-lg p-2 w-72">
              Kindle $13.99
            </button>
          </div>
          <div className="right-column flex flex-col flex-1 overflow-y-auto ml-96 mt-8">
            <h1 className="text-5xl font-semibold">{book.title}</h1>
            <div className="mr-52"> 
              <h2 className="mt-4 text-2xl font-thin text-grey">{book.author}</h2>
              <div className="flex align-center">
                <span className="mr-2"><StarRating rating={book.ratings_average} /></span>
                <p className="mt-4"><span className="text-3xl">{book.ratings_average}</span> <span className="align-top ml-1 text-grey">{book.ratings_count} ratings</span> </p>
              </div>
              <p className="mt-4">{bookInfo.description}</p>
              <p className="mt-4">Genres: {bookInfo.subjects}</p>
              <p className="mt-4"> First published {book.first_publish_year}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
