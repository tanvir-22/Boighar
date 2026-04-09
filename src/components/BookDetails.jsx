import React, { useContext, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { BookContext } from '../Context/BookProvider';


const BookDetails = () => {
    const {id} = useParams();
    const bookData = useLoaderData();
    const expectedBook = bookData.find((item)=>item.bookId==id);
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = expectedBook
    
    const {handleRead,handlewishList} = useContext(BookContext)
  
  
  
    return (
   <div className="card grid grid-cols-1 md:grid-cols-2 lg:card-side bg-base-100 shadow-sm">
  <figure className=''>
    <img className='bg-base-200 p-10 h-120 w-fit'
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>{author}</p>

    <div className='border-t border-b '>
        <p>{category}</p>
    </div>
    <p>{review}</p>

    Tag:{tags.map(item=>(
        <p className='text-primary '>{item}</p>
    ))}
    <div className='border-t'>
        <p>Number of pages: {totalPages}</p>
        <p>publisher: {publisher}</p>
        <p>Year of Publishing:: {yearOfPublishing}</p>
        <p>Rating: {rating}</p>
    </div>
    <div className="card-actions justify-start">
      <button onClick={()=>handleRead(expectedBook)} className="btn btn-primary">Mark as read</button>
      <button onClick={()=>handlewishList(expectedBook)} className="btn btn-primary">Add to Wishlist</button>
    </div>
  </div>
</div>
  )
}

export default BookDetails