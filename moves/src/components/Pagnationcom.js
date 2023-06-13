import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagnationcom = () => {
  const handlePageClick = () => {

  } 
const pageCount = 200
  return (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"

          containerClassName='pagination'
          pageClassName='page-item color5'
          pageLinkClassName='page-link color5'
          // previousClassName='page-link color2'
          previousLinkClassName='page-link color2'
          nextClassName='page-link color2'
          breakClassName='page-link color2'
          activeClassName='active coloractive'
          />
  )
}

export default Pagnationcom
