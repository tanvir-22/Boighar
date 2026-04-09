import React, { use } from 'react'
import Card from './Card';

const AllBooks = ({ bookFetch }) => {
    const books = use(bookFetch);
    return (

        <>
        <h1 className='text-center py-10 text-3xl'>All Books</h1>
            <div className=' w-11/12 gap-6 mx-auto grid md:grid-cols-3 place-items-center grid-cols-1 '>

                {books.map((item, indx) => (
                    <Card item={item} />
                ))}
            </div>
        </>
    )
}

export default AllBooks