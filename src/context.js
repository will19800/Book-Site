import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
import frame from './images/shittyframe.svg'
const titleURL = 'https://openlibrary.org/search.json?title=';

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${titleURL}${searchTerm}`);
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title, ratings_average, ratings_count } = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                        ratings_average: ratings_average,
                        ratings_count: ratings_count
                    };
                });

                const newBooksWithCovers = newBooks.map((bookSingle) => {
                    let ratingaverage = ""

                    if (bookSingle.ratings_average) {
                        ratingaverage = bookSingle.ratings_average.toFixed(2)
                    }

                    return {
                        ...bookSingle,
                        id: (bookSingle.id).replace("/works/", ""),
                        cover_id: bookSingle.cover_id ? `https://covers.openlibrary.org/b/id/${bookSingle.cover_id}-L.jpg` : frame,
                        ratings_average: ratingaverage,
                    };
                });

                setBooks(newBooksWithCovers);
                console.log(newBooksWithCovers)

                setResultTitle(newBooks.length > 1 ? 'Your Search Result' : 'No Search Result Found');

            } else {
                setBooks([]);
                setResultTitle('No Search Result Found');
            }
            setLoading(false);

        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={{
            loading, books, setSearchTerm, resultTitle, setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider };