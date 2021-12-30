import React from 'react'
import ReactPaginate from "react-paginate";

export default function Pagination() {
    return (
        <div>
             <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={25}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
            
        
    )
}
