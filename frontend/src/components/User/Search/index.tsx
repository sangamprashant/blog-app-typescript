import React from "react";
import "./Search.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

type SearchProps = {
  th: boolean;
};

const Search = ({ th }: SearchProps) => {
  return (
    <section className="d-flex justify-content-center">
      <form className="d-flex gap-2 col-md-6">
        <input 
          type="search" 
          className={`form-control ${th ? '' : 'text-white bg-dark dark-theme'}`} 
          placeholder="Search an article" 
          style={{ borderColor: th ? '' : '#495057' }} // Customize border color
        />
        <button 
          className={`btn ${th ? 'bg-gradient' : 'bg-dark text-white'} rounded-5`} 
          style={{ borderColor: th ? '' : '#495057' }} // Customize border color
        >
          <SearchOutlinedIcon style={{ color: th ? '' : '#fff' }} /> {/* Set icon color */}
        </button>
      </form>
    </section>
  );
};

export default Search;

