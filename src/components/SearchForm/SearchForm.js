import React from 'react'

const SearchForm = ({ submitHandler, searchKey, searchHandler }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Search.."
                value={searchKey}
                onChange={searchHandler}
                onKeyUp={searchHandler}
            />
        </form>
    )
}

export default SearchForm;