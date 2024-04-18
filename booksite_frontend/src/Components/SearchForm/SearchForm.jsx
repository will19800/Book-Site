import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import searchicon from '../../images/search.svg'
import './Searchform.css'

const Searchform = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (text) => {
    text.preventDefault();
    let tempSearchTerm = searchText.current.value.trim()
    if((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("the lost world")
      setResultTitle("Please Enter Something")
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate('/search')
  }

  return (

      <form className="bg-darkwhite border-b-beige rounded-xl p-2 shadow-lg opacity-1" onSubmit={handleSubmit}>
          <input className="bg-transparent flex-1 outline-none custom-input items-center placeholder-white placeholder-opacity-0.5"
            type="Text"
            placeholder='Search'
            ref = {searchText}
            style={{border : 'none'}}
          />
          <button className="bg-backgroundwhite hover:bg-steelblue border-b-beige rounded-xl p-2" type="text" onClick={handleSubmit}>
            <img className="w-4 h-4" src={searchicon} alt="search icon"/>
          </button>
      </form>

  );
};

export default Searchform;
