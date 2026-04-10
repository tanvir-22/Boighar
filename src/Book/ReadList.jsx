import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../Context/BookProvider'
import ListCard from './ListCard';

const ReadList = ({ sortingType }) => {
    const { markedBook } = useContext(BookContext);
    const [filteredMarkedBook, setFilteredMarkedBook] = useState(markedBook);

    useEffect(() => {
        if (sortingType) {
            if (sortingType == 'page') {
                const filteredMarkedBook = [...markedBook].sort((a, b) => a.totalPages - b.totalPages)
                setFilteredMarkedBook(filteredMarkedBook)
            } else if (sortingType == 'rating') {
                const filteredMarkedBook = [...markedBook].sort((a, b) => a.rating - b.rating)
                setFilteredMarkedBook(filteredMarkedBook)
            }
        }
    }, [sortingType, markedBook])


    return (
        

           <>
           
           {
               filteredMarkedBook.length>0 ?
                filteredMarkedBook.map((item) => (
                    <ListCard item={item} />
                )) :<div>
                <h1 className='text-center'>No book added to readlist</h1>
               </div>
               
            }
           </>
             
           

        
    )
}

export default ReadList