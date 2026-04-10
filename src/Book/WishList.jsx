import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../Context/BookProvider'
import ListCard from './ListCard';

const WishList = ({ sortingType }) => {
    const { wishList } = useContext(BookContext);
    const [filterWishList, setFilteredMarkedBook] = useState(wishList);

    useEffect(() => {
        if (sortingType) {
            if (sortingType == 'page') {
                const filterWishList = [...wishList].sort((a, b) => a.totalPages - b.totalPages)
                setFilteredMarkedBook(filterWishList)
            } else if (sortingType == 'rating') {
                const filterWishList = [...wishList].sort((a, b) => a.rating - b.rating)
                setFilteredMarkedBook(filterWishList)
            }
        }
    }, [sortingType, wishList])
    return (
        <>

            {
                filterWishList.length > 0 ? filterWishList.map((item) => (
                    <ListCard item={item} />
                )) : <div>
                    <h1 className='text-center'>No book added to wishlist</h1>

                </div>
            }

        </>
    )
}

export default WishList