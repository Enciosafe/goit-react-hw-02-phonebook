import React from "react";

const Filter = ({handlerFilter, filter}) => {
    return <>
        <p>Find contacts by name:</p>
        <input onChange={handlerFilter}
               type="text"
               value={filter}/>
    </>
}

export default Filter