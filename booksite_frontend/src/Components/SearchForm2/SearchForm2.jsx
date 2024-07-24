import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import searchicon from '../../images/search.svg'

const Searchform = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (text) => {
    text.preventDefault();
    let tempSearchTerm = searchText.current.value.trim()
    if((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("")
      setResultTitle("Please Enter Something")
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate('/search')
  }

  return (
    <div className="flex">
      <form className="bg-white border-b-beige rounded-md p-3 w-3/4 shadow-lg opacity-1" onSubmit={handleSubmit}>
          <input className="bg-transparent font-radiocanada outline-none w-full custom-input items-center placeholder-grey placeholder-opacity-25"
            type="Text"
            placeholder='Search by Book Title'
            ref = {searchText}
            style={{border : 'none'}}
          />
      </form>
      <button className="bg-white p-2 ml-2 rounded-md shadow-lg text-grey" type="text" onClick={handleSubmit}>
          Search
      </button>
    </div>
  );
};

export default Searchform;
